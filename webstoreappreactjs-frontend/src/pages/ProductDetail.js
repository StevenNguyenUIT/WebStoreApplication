import React from "react";
import {useLocation} from 'react-router-dom';

export const ProductDetail = () => {
    const location = useLocation();
    let productnumber = location.state.productnumber;
    let productdetail = (
        <div>
            <h1>Product Number</h1>
            <p>{productnumber}</p>
        </div>
    );
    return productdetail;
}