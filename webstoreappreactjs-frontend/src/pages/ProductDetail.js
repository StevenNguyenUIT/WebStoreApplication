import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import axios from 'axios';

export const ProductDetail = () => {
    const location = useLocation();
    const currentProductNumber = location.state.productNumber;
    const client = axios.create({
        baseURL:"http://localhost:8080/api/products"
    });
    //test product detail from local database
    const initialProduct = {productNumber: currentProductNumber, name: "test1", price: "422", description: "this is a test", numberInStock:""};
    const [currentProduct, setCurrentProduct] = useState(initialProduct);
    React.useEffect(()=>{
        loadProduct();
    },[]);
    //load product detail from backend
    //.....
    const loadProduct = () => {
        client.get("/"+currentProductNumber)
        .then((response)=>{
            console.log(response.data);
            setCurrentProduct(response.data);
        })
    }

    //update product detail from backend
    //.....
    // const [updateProduct, setUpdateProduct] = useState(currentProduct);
    const handleFieldChange = (e) => {
        setCurrentProduct({...currentProduct,[e.target.name]:e.target.value});
    }
    //update function
    const handleSubmit = (e) => {
        console.log("onSubmit update")
        //update 
        //...
        client.put("/" + currentProduct.productNumber,currentProduct)
        .then((response)=>{
            console.log(response);
            loadProduct();
        })

        e.preventDefault();
    }
    let productdetail = (
        <div>
            <h1>Product Detail</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Product Number:</td>
                            <td>{currentProduct.productNumber}</td>
                        </tr>
                        <tr>
                            <td>Product Name:</td>
                            <td><input
                                type="text"
                                value={currentProduct.name}
                                name="name"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td><input
                                type="text"
                                value={currentProduct.price}
                                name="price"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><input
                                type="text"
                                value={currentProduct.description}
                                name="description"
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Number In Stock:</td>
                            <td><input
                                type="text"
                                value={currentProduct.numberInStock}
                                name="numberInStock"
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