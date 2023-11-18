import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const Products = () => {
    const navigate = useNavigate();
    const cleanproduct = {productNumber:"", name:"", price:"",description:"",numberInStock:"",reviewList:[]};
    const [product, setProduct] = useState(cleanproduct);
    const [productFilter, setProductFilter] = useState('');
    //Create productList for testing
    // const initialList = [
    //     {productnumber:"123", name:"Iphone", price:"1000",description:"Iphone 15"},
    //     {productnumber:"124", name:"Computer", price:"3000",description:"MacPro"}
    // ]
    const [productList, setProductList] = useState([]);
    React.useEffect(()=>{
        loadProducts();
    }, []);

    const client = axios.create({
        baseURL: "http://localhost:8080/api/products"
    })

    const loadProducts = () => {
        const products = client.get()
        .then((response) => {
            // console.log(response.data.products);
            // setProductList
            setProductList(response.data.products);
        })
    }
    const searchProduct = () =>{
        console.log(productFilter);
        client.get("/" + productFilter)
        .then((response)=>{
            //map data to array 
            let array = new Array(response.data);
            // console.log(array);
            setProductList(array);
        })
    }

    const addProduct = (product) => {
        client.post("http://localhost:8080/api/products", product)
        .then((response) =>{
            console.log("added product " + response.data.productNumber );
            loadProducts();
        });
    }

    const removeProduct = (e) => {
        console.log(e.target.value);
        client.delete("/" + e.target.value)
        .then((response)=>{
            console.log("removed product " + response.headers)
            loadProducts();
        });
    }

    const handleSubmit = (e) => {
        console.log("handleSubmit");
        if (product){
            //use for test list
            setProductList(productList.concat(product));
            //used when call ApI
            console.log("call the server");
            console.log(product);
            addProduct(product);
        }
        //clear product
        setProduct(cleanproduct);

        //prevent Post request
        e.preventDefault();
    }

    const handleFieldChange = (e) =>{
        setProduct({...product,[e.target.name]:e.target.value});
    }

    // const handleRemove = (e) => {
    //     let newProductList = productList.filter(pro=>pro.productnumber !== e.target.value)
    //     setProductList(newProductList);
    // }

    const handleViewDetail = (e) => {
        console.log(e.target);
        //navigate to detail page
        navigate('/productdetail', {state: {productNumber:e.target.value}});
    }

    let products = (
        <div>
            <h1>Management of Product</h1>
            <div>
                Filter by ProductNumber 
                <input
                    type='text'
                    placeholder='Product Number'
                    value={productFilter}
                    onChange={e=>setProductFilter(e.target.value)}
                />
                <button onClick={searchProduct}>Search</button>
            </div>
            <br/>
            <div>
                <table border={1}>
                    <tbody>
                        <tr><th>Product Number</th><th>Name</th><th>Price</th><th>Description</th><th>numberInStock</th></tr>
                    {productList.map(product => (
                        <tr key={product.productNumber}>
                            <td>{product.productNumber}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.numberInStock}</td>
                            <td><button onClick={removeProduct} value={product.productNumber}>Remove</button></td>
                            <td><button onClick={handleViewDetail} value={product.productNumber}>View Detail</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <h1>Add a new Product</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Product Number</td>
                                <td><input
                                    type='text'
                                    placeholder='productNumber'
                                    name='productNumber'
                                    value={product.productNumber}
                                    onChange={handleFieldChange}
                                /></td>
                            </tr>
                            <tr>
                                <td>Product Name</td>
                                <td><input
                                    type='text'
                                    placeholder='product Name'
                                    name='name'
                                    value={product.name}
                                    onChange={handleFieldChange}
                                /></td>
                            </tr>
                            <tr>
                                <td>Product Price</td>
                                <td><input
                                    type='text'
                                    placeholder='price'
                                    name='price'
                                    value={product.price}
                                    onChange={handleFieldChange}
                                /></td>
                            </tr>
                            <tr>
                                <td>Product Description</td>
                                <td><input
                                    type='text'
                                    placeholder='description'
                                    name='description'
                                    value={product.description}
                                    onChange={handleFieldChange}
                                /></td>
                            </tr>
                            <tr>
                                <td>Number In Stock</td>
                                <td><input
                                    type='text'
                                    placeholder='Number in Stock'
                                    name='numberInStock'
                                    value={product.numberInStock}
                                    onChange={handleFieldChange}
                                /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type='submit'>Add Product</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
    return products;
}