import React, { useState } from 'react';


function ProductItem({ product, onDelete, onUpdateCount }) {
  const { id, name, price, count } = product;

  const handleIncrement = () => {
    onUpdateCount(id, count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) { 
      onUpdateCount(id, count - 1);
    }
  };

  const handleDoubleClick = () => {
    if (count === 0) { 
      onDelete(id);
    }
  };

  return (
    <div
      className="product-item"
      style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
      onDoubleClick={handleDoubleClick} 
    >
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: '0 10px', fontSize: '20px' }}>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}


function App() {
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Ноутбук', price: 11000, count: 1 },
    { id: 2, name: 'Мышка', price: 960, count: 1 },
    { id: 3, name: 'Клавиатура', price: 1300, count: 2 },
    { id: 4, name: 'Наушнкики', price: 1000, count: 4 },
  ]);

  
  const addProduct = () => {
    const name = prompt('Введите название товара:');
    if (!name) return; 
    const price = prompt('Введите цену товара:');
    if (!price) return; 
    const count = prompt('Введите количество товара:');
    if (!count) return; 
    const newProduct = {
      id: Date.now(), 
      name: name,
      price: parseInt(price),
      count: parseInt(count),
    };
    setProducts([...products, newProduct]);
  };

  
  const updateProductCount = (id, newCount) => {
    if (newCount > 25) { 
      alert('Количество товара не может превышать 25.');
      return;
    }
    setProducts(products.map(product =>
      product.id === id ? { ...product, count: newCount } : product
    ));
  };

 
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Список товаров</h1>
      <button onClick={addProduct}>Добавить новый товар</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={deleteProduct}
            onUpdateCount={updateProductCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
