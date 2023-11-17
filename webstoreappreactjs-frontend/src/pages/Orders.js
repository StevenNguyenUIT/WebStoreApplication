import React, { useState } from "react";

export const Orders = () =>{
    //initial list of order
    const initialOrderList = [
        {orderId: "A134", name: "Order1", status: "PLACED"},
        {orderId: "A135", name: "Order2", status: "SHIPPED"},
        {orderId: "A136", name: "Order3", status: "DELIVERED"}
    ]
    const [orderList, setOrderList] = useState(initialOrderList);
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return Orders;
}