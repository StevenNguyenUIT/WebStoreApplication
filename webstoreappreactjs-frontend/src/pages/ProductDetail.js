import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {useForm} from 'react-hook-form';

export const ProductDetail = () => {
    const location = useLocation();
    const currentProductNumber = location.state.productNumber;
    const initProduct = location.state.product;
    const client = axios.create({
        baseURL:"http://localhost:8080/api/products"
    });

    const [initialProduct, setInitialProduct] = useState({productNumber: currentProductNumber, 
        name: initProduct[0].name, 
        price: initProduct[0].price, 
        description: initProduct[0].description, 
        numberInStock: initProduct[0].numberInStock
    });
    const [currentProduct, setCurrentProduct] = useState(initialProduct);

    //validate react-hook-form
    const {register, handleSubmit, formState: {errors}} = useForm();

    React.useEffect(()=>{
        loadProduct();
    },[]);
    //load product detail from backend
    const loadProduct = () => {
        client.get("/"+currentProductNumber)
        .then((response)=>{
            // console.log(response.data);
            setCurrentProduct(response.data);
            setInitialProduct(response.data);
        })
    }

    //update product detail from backend
    const handleFieldChange = (e) => {
        setCurrentProduct({...currentProduct,[e.target.name]:e.target.value});
    }

    //update function
    const onSubmit = (currentProduct) => {
        console.log("onSubmit update");
        currentProduct.productNumber = currentProductNumber;
        client.put("/" + currentProductNumber,currentProduct)
        .then((response)=>{
            console.log(response);
            loadProduct();
        })
    }
    let productdetail = (
        <div>
            <h1>Product Detail</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>Current Value</td>
                            <td>Update Value</td>
                            <td>Information</td>
                        </tr>
                        <tr>
                            <td>Product Number:</td>
                            <td>{initialProduct.productNumber}</td>
                            <td>{currentProduct.productNumber}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Product Name:</td>
                            <td>{initialProduct.name}</td>
                            <td><input
                                type="text"
                                // value={currentProduct.name}
                                name="name"
                                onChange={handleFieldChange}
                                {...register("name",{
                                    required: "Product Name is required."
                                })}
                            />
                            </td>
                        <td>{errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>{initialProduct.price}</td>
                            <td><input
                                type="text"
                                // value={currentProduct.price}
                                name="price"
                                onChange={handleFieldChange}
                                {...register("price",{
                                    required: "price is required.",
                                    pattern:{
                                        value: /^[0-9]{1,}$/,
                                        message: "please input number"
                                    },
                                    min:{
                                        value:1,
                                        message: "price should at-least 1"
                                    }
                                })}
                            />
                            </td>
                        <td>{errors.price && (<p style={{color: "red"}}>{errors.price.message}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{initialProduct.description}</td>
                            <td><input
                                type="text"
                                // value={currentProduct.description}
                                name="description"
                                onChange={handleFieldChange}
                                {...register("description",{
                                    required: "Product Name is required."
                                })}
                            />
                            </td>
                        <td>{errors.description && (<p style={{color: "red"}}>{errors.description.message}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Number In Stock:</td>
                            <td>{initialProduct.numberInStock}</td>
                            <td><input
                                type="text"
                                // value={currentProduct.numberInStock}
                                name="numberInStock"
                                onChange={handleFieldChange}
                                {...register("numberInStock",{
                                    required: "numberInStock is required.",
                                    pattern:{
                                        value: /^[0-9]{1,}$/,
                                        message: "please input number"
                                    },
                                    min:{
                                        value:0,
                                        message: "numberInStock should at-least 0"
                                    }
                                })}
                            />
                            </td>
                        <td>{errors.numberInStock && (<p style={{color: "red"}}>{errors.numberInStock.message}</p>)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><button type="submit">Update</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
    return productdetail;
}