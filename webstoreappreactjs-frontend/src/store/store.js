import {configureStore} from '@reduxjs/toolkit';

const cartReducer = (state = {cart: 10}, action) => {
    if(action.type === 'increment') {
        return {cart: state.cart + 1};
    }
    if(action.type === 'decrement'){
        return {cart: state.cart-1};
    }
    return state;
}

const store = configureStore({
    reducer: cartReducer
});

export default store;