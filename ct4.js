
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 


const defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
];


const INCREMENT_ITEM = 'INCREMENT_ITEM';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT_ITEM:
            
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, count: Math.min(item.count + 1, 25) }
                    : item
            );

        case DECREMENT_ITEM:
            
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, count: Math.max(item.count - 1, 0) }
                    : item
            );

        case ADD_ITEM:
            
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex > -1) {
                return state.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                
                const newItem = {
                    id: action.payload.id || Date.now(), 
                    title: action.payload.title || prompt('Введите название товара:'), 
                    count: 1
                };
                
                if (state.length < 1000 && newItem.title) { 
                    return [...state, newItem];
                }
            }
            return state; 

        case REMOVE_ITEM:
            
            return state.filter(item => item.id !== action.payload.id || item.count >= 1);

        default:
            return state;
    }
};


const store = createStore(reducer, applyMiddleware(thunk));


export { store, INCREMENT_ITEM, DECREMENT_ITEM, ADD_ITEM, REMOVE_ITEM };


