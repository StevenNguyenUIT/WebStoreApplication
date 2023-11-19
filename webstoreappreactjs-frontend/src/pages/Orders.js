import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const Orders = () =>{
    const navigate = useNavigate();
    //initial list of order
    const [orderList, setOrderList] = useState([]);

    const client = axios.create({
        baseURL:"http://localhost:8080/api/orders"
    })

    React.useEffect(()=>{
        loadOrders();
    }, [])

    const loadOrders = ()=>{
        const orders = client.get()
        .then((response)=>{
            // console.log(response.data.orderList);
            setOrderList(response.data.orderList)
        })
    }

    const viewDetail = (e) => {
        navigate('/orderdetail', {state:{orderId: e.target.value}});
    }
    let Orders = (
        <div>
            <h1> Order Management</h1>
            <div>
                Search by Status: 
                <select>
                    <option>All</option>
                    <option>PLACED</option>
                    <option>SHIPPED</option>
                    <option>DELIVERED</option>
                </select>
                <button>Search</button>
            </div>
            <br/>
            <table border={1}>
                <tbody>
                    <tr>
                        <th>OrderID</th><th>Date</th><th>Status</th><th>Total Amount</th>
                    </tr>
                    {orderList.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                            <td>{order.totalAmount}</td>
                            <td><button onClick={viewDetail} value={order.orderId}>View Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return Orders;
}