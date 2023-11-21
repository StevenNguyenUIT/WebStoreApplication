import {configureStore} from '@reduxjs/toolkit';

const cartReducer = (state = {itemQuantity: 0, itemLines:[], totalAmount:0}, action) => {
    if(action.type==='addcart'){
        let existItem = state.itemLines.filter(item=>item.productNumber === action.item.productNumber);
        let filterItem = state.itemLines.filter(item=>item.productNumber !== action.item.productNumber);
        if(existItem.length!==0){
            let newItem = {productNumber:existItem[0].productNumber,
                name:existItem[0].name,price: existItem[0].price, quantity: existItem[0].quantity + 1};
            state = {
                itemQuantity: state.itemQuantity + 1,
                itemLines: filterItem.concat(newItem),
                totalAmount: state.totalAmount + action.item.price
            }
        } else {
            state = {
                itemQuantity: state.itemQuantity + 1,
                itemLines: state.itemLines.concat(action.item),
                totalAmount: state.totalAmount + action.item.price
            }
        }
    }
    if(action.type==='removeitem'){
        let filterItem = state.itemLines.filter(item=>item.productNumber !== action.item.productNumber);
        state = {
            itemQuantity: state.itemQuantity -action.item.quantity,
            itemLines: filterItem,
            totalAmount: state.totalAmount - (action.item.price*action.item.quantity)
        }
    }
    if(action.type==='removecart'){
        state = {
            itemQuantity: 0,
            itemLines: [],
            totalAmount: 0
        }
    }
    return state;
}

const store = configureStore({
    reducer: cartReducer
});

export default store;