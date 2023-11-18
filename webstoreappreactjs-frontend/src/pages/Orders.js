import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

export const Orders = () =>{
    const navigate = useNavigate();
    //initial list of order
    const initialOrderList = [
        {orderId: "A134", name: "Order1", status: "PLACED"},
        {orderId: "A135", name: "Order2", status: "SHIPPED"},
        {orderId: "A136", name: "Order3", status: "DELIVERED"}
    ]
    const [orderList, setOrderList] = useState(initialOrderList);

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
                        <th>OrderID</th><th>OrderName</th><th>Status</th>
                    </tr>
                    {orderList.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.name}</td>
                            <td>{order.status}</td>
                            <td><button onClick={viewDetail} value={order.orderId}>View Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return Orders;
}