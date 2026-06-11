
const products = [
  {
    id: 1,
    name: "Рюкзак - Кожанный 10.1 ",
    price: 109.95,
    description: "Хороший рюкзак.",
    rating: 4.5,
    imageUrl: "https://avatars.mds.yandex.net/i?id=b77d23c265298f9c56d05b7e422a2a7a_sr-16313479-images-thumbs&n=13"
  },
  {
    id: 2,
    name: "Рюкзак 2",
    price: 89.99,
    description: "Еще 1 хороший рюкзак.",
    rating: 4.0,
    imageUrl: "https://avatars.mds.yandex.net/i?id=913489489109e037da5355e83d14eb09_l-4033188-images-thumbs&n=13"
  }
  
];


function renderProductList() {
  const listContainer = document.getElementById('product-list');
  listContainer.innerHTML = '';

  products.forEach(product => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'product-item';
    itemDiv.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.imageUrl}" alt="${product.name}" />
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating} stars</p>
    `;
    itemDiv.onclick = () => showProductDetails(product.id);
    listContainer.appendChild(itemDiv);
  });

  document.getElementById('product-list').style.display = 'block';
  document.getElementById('product-details').style.display = 'none';
}


function showProductDetails(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const infoDiv = document.getElementById('product-info');
  infoDiv.innerHTML = `
    <h3>${product.name}</h3>
    <img src="${product.imageUrl}" alt="${product.name}" />
    <p>Price: $${product.price}</p>
    <p>Description: ${product.description}</p>
    <p>Rating: ${product.rating} stars</p>
  `;

  document.getElementById('product-list').style.display = 'none';
  document.getElementById('product-details').style.display = 'block';
}


document.getElementById('back-button').onclick = () => {
  renderProductList();
};


renderProductList();
