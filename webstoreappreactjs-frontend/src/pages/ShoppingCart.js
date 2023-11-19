import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    const initialProductList = [{
        "_id": "P1234568",
        "name": "Honeycrisp Apple",
        "price": 1.3,
        "description": "Fresh Honeycrisp Apple per Each",
        "numberInStock": 10,
        "reviewList": [],
        "_class": "com.webstore.domain.Product"
      },
      {
        "_id": "P1234567",
        "name": "Red Grapes",
        "price": 5,
        "description": "Fresh Red Seedless Grapes, Bag 2.25 lbs per Bag",
        "numberInStock": 20,
        "reviewList": [
          {
            "_id": "osvwIZSLRv",
            "username": "customer103",
            "rate": "4 - GOOD",
            "date": {
              "$date": "2023-11-17T17:05:26.000Z"
            }
          },
          {
            "_id": "uJNENMHzHw",
            "username": "customer104",
            "rate": "5 - EXCELLENT",
            "date": {
              "$date": "2023-11-17T17:10:19.514Z"
            }
          }
        ],
        "_class": "com.webstore.domain.Product"
      }];
    const [productList, setProductList] = useState(initialProductList);
    const incrementHandler = () =>{
        dispatch({type: 'increment'});
    }

    const goToCartInfo = () => {
      navigate("/cart");
    }

    let shoppingcart = (
        <div>
            <h1>This is Shopping Cart page</h1>
            <h2>cart : {cart}</h2>
            <div>
                ProductName
                <input
                    type="text"
                />
                <button>Search</button>
            </div>
            <br/>
            <table border={1}>
                <tbody>
                    <tr>
                        <th>_id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>numberInStock</th>
                    </tr>
                    {productList.map(product=>(
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.numberInStock}</td>
                            <td><button onClick={incrementHandler} value={product._id}>AddToCart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <button onClick={goToCartInfo}>GoToCartInfo</button>
        </div>
    );
    return shoppingcart;
}