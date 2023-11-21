import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Main } from "./Main";

export const CheckoutDetails = ({title}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const personalInfo = location.state.personalInfo;
    const paymentInfo = location.state.paymentInfo;
    const totalAmount = useSelector(state=>state.totalAmount);
    const orderItemList = useSelector(state=>state.itemLines);
    const order = {totalAmount: totalAmount, 
                    personalInfo: personalInfo,
                    paymentInfo: paymentInfo,
                    orderItemList: orderItemList}
    const client = axios.create({
        baseURL: "http://localhost:8080/api/orders"
    })

    const addOrder = () => {
        console.log(order);
        client.post("http://localhost:8080/api/orders", order)
        .then((response) =>{
            console.log("added order " + response.data );
            dispatch({type: 'removecart', item: [], totalAmount:0, itemQuantity:0});
            navigate('/orders');
        });
    }

    return (
        <div>
            <Main title={title}/>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>totalAmount: </td>
                        <td>{totalAmount}</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>

            <div>
              <h3>Personal Information</h3>
                <table border={1}>
                  <tbody>
                    <tr><td>name</td><td>email</td><td>phone</td><td>street</td><td>city</td><td>zip</td></tr>
                    <tr>
                      <td>{personalInfo.name}</td>
                      <td>{personalInfo.email}</td>
                      <td>{personalInfo.phone}</td>
                      <td>{personalInfo.street}</td>
                      <td>{personalInfo.city}</td>
                      <td>{personalInfo.zip}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div>
              <h3>Payment Information</h3>
                <table border={1}>
                  <tbody>
                    <tr><td>creditCardType</td><td>number</td><td>validDate</td><td>validationCode</td></tr>
                    <tr>
                      <td>{paymentInfo.creditCardType}</td>
                      <td>{paymentInfo.number}</td>
                      <td>{paymentInfo.validDate}</td>
                      <td>{paymentInfo.validationCode}</td>
                    </tr>
                  </tbody>
                </table>
            </div>

            <div>
              <h3>order Item List</h3>
                <table border={1}>
                  <tbody>
                    <tr><td>productNumber</td><td>name</td><td>quantity</td><td>price</td></tr>
                    {orderItemList.map(item=>(
                      <tr key={item.productNumber}>
                        <td>{item.productNumber}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
            <br/>
            <button onClick={addOrder}>Confirm Order</button>
        </div>
    );
}