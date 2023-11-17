import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export const Products = () => {
    const navigate = useNavigate();
    const cleanproduct = {productnumber:"", name:"", price:"",description:""};
    const [product, setProduct] = useState(cleanproduct);
    //Create productList for testing
    const initialList = [
        {productnumber:"123", name:"Iphone", price:"1000",description:"Iphone 15"},
        {productnumber:"124", name:"Computer", price:"3000",description:"MacPro"}
    ]
    const [productList, setProductList] = useState(initialList);

    const handleSubmit = (e) => {
        //prevent Post request
        e.preventDefault();
        console.log("handleSubmit");
        if (product){
            //use for test list
            setProductList(productList.concat(product));
            //used when call ApI
            // console.log("call the server");
            // addProduct(product);
        }
        //clear product
        setProduct(cleanproduct);

        //load product if call Api
    }

    const handleFieldChange = (e) =>{
        setProduct({...product,[e.target.name]:e.target.value});
    }

    const handleRemove = (e) => {
        let newProductList = productList.filter(pro=>pro.productnumber !== e.target.value)
        setProductList(newProductList);
    }

    const handleViewDetail = (e) => {
        console.log(e.target);
        //navigate to detail page
        navigate('/productdetail', {state: {productnumber:e.target.value}});
    }

    let products = (
        <div>
            <h1>Management of Product</h1>
            <div>
                Filter by ProductNumber 
                <input
                    type='text'
                />
                <button>Search</button>
            </div>
            <br/>
            <div>
                <table border={1}>
                    <thead><th>Product Number</th><th>Name</th><th>Price</th><th>Description</th></thead>
                    <tbody>
                    {productList.map(product => (
                        <tr key={product.productnumber}>
                            <td>{product.productnumber}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td><button onClick={handleRemove} value={product.productnumber}>Remove</button></td>
                            <td><button onClick={handleViewDetail} value={product.productnumber}>View Detail</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <h1>Add a new Product</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Product Number</td>
                            <td><input
                                type='text'
                                placeholder='productNumber'
                                name='productnumber'
                                value={product.productnumber}
                                onChange={handleFieldChange}
                            /></td>
                        </tr>
                        <tr>
                            <td>Product Name</td>
                            <td><input
                                type='text'
                                placeholder='productNumber'
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
                            <td></td>
                            <td><button type='submit'>Add Product</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
    return products;
}