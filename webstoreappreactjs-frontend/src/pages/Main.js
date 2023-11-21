import React from "react";
import {useNavigate} from 'react-router-dom';
import '../App.css';

export const Main = ({title}) => {
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
        <div className="App">
            <div>
                <br/>
                <button onClick={navigateToProducts}>Link to Products</button>
                <button onClick={navigateToOrders}>Link to Orders</button>
                <button onClick={navigatetoShopping}>Link to ShoppingCart</button>
                <h1>{title}</h1>
                <hr/>
            </div>
        </div>
    );
    return main;
}