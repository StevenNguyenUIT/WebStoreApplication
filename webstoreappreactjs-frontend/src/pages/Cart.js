import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemQuantity = useSelector(state=>state.itemQuantity);
    const itemLines = useSelector(state=>state.itemLines);
    const totalAmount = useSelector(state=>state.totalAmount);
    const onCheckout = () => {
        navigate('/checkout/personalinfo');
    }
    let cartpage = (
        <div>
            <h1>This is CartPage</h1>
            <h2>cart:(itemQuantity:{itemQuantity} , totalAmount: {totalAmount} )&nbsp;</h2>
            <table border={1}>
              <tbody>
                <tr>
                    <th>ProductNumber</th>
                    <th>name</th>
                    <th>quantity</th>
                    <th>unit price</th>
                </tr>
                {itemLines.map(item=>(
                  <tr key={item.productNumber}>
                      <td>{item.productNumber}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>
            <button onClick={onCheckout}>Checkout</button>
        </div>
    );
    return cartpage;
}