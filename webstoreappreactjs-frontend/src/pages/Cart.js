import React from "react";
import {useDispatch, useSelector} from 'react-redux';

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    const decrementHandler = () => {
        dispatch({type: 'decrement'});
    }
    let cartpage = (
        <>
            <h1>This is CartPage</h1>
            <p>cart: {cart}</p>
            <button onClick={decrementHandler}>decrement</button>
        </>
    );
    return cartpage;
}