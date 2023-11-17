import React from "react";
import {useNavigate} from 'react-router-dom';

export const Main = () => {
    let navigate = useNavigate();
    const navigateToProducts = () => {
        navigate('/products');
    }

    const navigateToOrders = () => {
        navigate('/orders');
    }

    const navigatetoShopping = () => {
        navigate('/shoppings');
    }
    let main = (
        <>
            <h1>This is main page</h1>
            <br/>
            <button onClick={navigateToProducts}>Link to Products</button>
            <button onClick={navigateToOrders}>Link to Orders</button>
            <button onClick={navigatetoShopping}>Link to ShoppingCart</button>
        </>
    );
    return main;
}