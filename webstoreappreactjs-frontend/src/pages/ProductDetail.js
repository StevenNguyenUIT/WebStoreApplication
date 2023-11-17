import React, { useState } from "react";
import {useLocation} from 'react-router-dom';

export const ProductDetail = () => {
    //load product detail from backend
    //.....

    //update product detail from backend
    //.....

    //test product detail from local database
    const location = useLocation();
    let currentProductNumber = location.state.productnumber;
    const currentProduct = {productnumber: currentProductNumber, name: "test1", price: "422", description: "this is a test"};
    const [updateProduct, setUpdateProduct] = useState(currentProduct);
    const handleFieldChange = (e) => {
        setUpdateProduct({...e,[e.target.name]:e.target.value});
    }
    //update function
    const handleSubmit = (e) => {
        console.log("onSubmit update")
        e.preventDefault();
        //update 
        //...
    }
    let productdetail = (
        <div>
            <h1>Product Detail</h1>
            <h1>Product Number</h1>
            <p>{updateProduct.productnumber}</p>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Product Number:</td>
                            <td><input
                                type="text"
                                value={updateProduct.productnumber}
                                name="productnumber"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Product Name:</td>
                            <td><input
                                type="text"
                                value={updateProduct.name}
                                name="name"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td><input
                                type="text"
                                value={updateProduct.price}
                                name="price"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Product Number:</td>
                            <td><input
                                type="text"
                                value={updateProduct.description}
                                name="description"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit">Update</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
    return productdetail;
}