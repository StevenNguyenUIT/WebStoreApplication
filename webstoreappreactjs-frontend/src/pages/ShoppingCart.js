import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const itemQuantity = useSelector(state=>state.itemQuantity);
    const itemLines = useSelector(state=>state.itemLines);
    const totalAmount = useSelector(state=>state.totalAmount);
    const [productFilter, setProductFilter] = useState('');
    const [productList, setProductList] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');
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

    const searchProduct = (e) =>{
      const isExistsProduct = productList.filter(e=>e.name===productFilter);
      console.log(productFilter);
      console.log(isExistsProduct);
      if(isExistsProduct.length !=0){
          client.get("/search?name=" + productFilter)
          .then((response)=>{
              //map data to array 
              let array = new Array(response.data);
              // console.log(array);
              setProductList(array);
              setSearchMessage("");
          })
      } else {
          setSearchMessage(<a style={{color:"red"}}>This Product Number is incorrect, show all</a>);
          loadProducts();
      }
    }
    
    const addToCart = (e) =>{
      let item = productList.filter(item => item.productNumber === e.target.value);
      let item1 = {
        productNumber :  item[0].productNumber,
        name : item[0].name,
        price : item[0].price,
        quantity : 1
      };
      console.log(item1);
      dispatch({type: 'addcart', item: item1});
    }

    const goToCartInfo = () => {
      navigate("/cart");
    }

    let shoppingcart = (
        <div>
            <h1>This is Shopping Cart page</h1>
            <h2>cart:(itemQuantity:{itemQuantity} , totalAmount: {totalAmount} )&nbsp;
            <button onClick={goToCartInfo}>GoToCartInfo</button>
            </h2>
            <hr/>
            <div>
                ProductName
                <input
                    type="text"
                    placeholder="name"
                    value={productFilter}
                    onChange={e=>setProductFilter(e.target.value)}
                />
                <button onClick={searchProduct}>Search</button>
                {searchMessage}
            </div>
            <br/>
            <table border={1}>
                <tbody>
                    <tr>
                        <th>ProductNumber</th>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>numberInStock</th>
                    </tr>
                    {productList.map(product=>(
                        <tr key={product.productNumber}>
                            <td>{product.productNumber}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.numberInStock}</td>
                            <td><button onClick={addToCart} value={product.productNumber}>AddToCart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return shoppingcart;
}