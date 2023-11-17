import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    const incrementHandler = () =>{
        dispatch({type: 'increment'});
        navigate('/cart');
    }
    let shoppingcart = (
        <>
            <h1>This is Shopping Cart page</h1>
            <h2>cart : {cart}</h2>
            <button onClick={incrementHandler}>Increase Cart</button>
        </>
    );
    return shoppingcart;
}