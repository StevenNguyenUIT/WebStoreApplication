import React, {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";

export const OrderDetail = () => {
    const location = useLocation();
    const [order, setOrder] = useState([]);
    const orderId = location.state.orderId;
    React.useEffect(()=>{
      loadOrder();
    },[])

    const client = axios.create({
      baseURL:"http://localhost:8080/api/orders"
    })

    const loadOrder = () => {
      const order = client.get("/" + orderId)
      .then((response)=>{
        console.log(response.data);
        setOrder(response.data);
      })
    }

    const MoveToOtherStatus = (status) => {
      client.post("http://localhost:8080/api/orders/" + orderId, {status:status})
      .then((response)=>{
        console.log(response);
        loadOrder();
      })
    }
    let orderdetail = (
        <div>
            <h1>This is Order Detail Page</h1>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>OrderId: </td>
                        <td>{order.orderId}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{order.status}</td>
                    </tr>
                    <tr>
                        <td>Date: </td>
                        <td>{order.date}</td>
                    </tr>
                    <tr>
                        <td>totalAmount: </td>
                        <td>{order.totalAmount}</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div>
                Change Status:
                <button onClick={()=>MoveToOtherStatus("SHIPPED")}>MoveToSHIPPED</button>
                <button onClick={()=>MoveToOtherStatus("DELIVERED")}>MoveToDELIVERED</button>
            </div>
        </div>
    );
    return orderdetail;
} 