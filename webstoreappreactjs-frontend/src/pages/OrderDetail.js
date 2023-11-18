import React, {useState} from "react";
import {useLocation} from 'react-router-dom';

export const OrderDetail = () => {
    const location = useLocation();
    const initialOrder = {
        "_id": "AfNfnhSugK",
        "status": "PLACED",
        "date": {
          "$date": "2023-11-17T20:39:15.762Z"
        },
        "totalAmount": 400,
        "personalInfo": {
          "name": "Jack Parrow",
          "email": "jackparrow@gmail.com",
          "phone": "6412339999",
          "street": "1000 N 4th ST ",
          "city": "Fairfield",
          "zip": "52557"
        },
        "paymentInfo": {
          "creditCardType": "Visa",
          "number": "1234567890123456",
          "validDate": "09/2030",
          "validationCode": "123"
        },
        "orderItemList": [
          {
            "productNumber": "P1234567",
            "name": "Red Apple",
            "quantity": 1,
            "price": 3
          },
          {
            "productNumber": "P1234568",
            "name": "Blue Apple",
            "quantity": 2,
            "price": 3.5
          }
        ],
        "_class": "com.webstore.domain.Order"
      }
    const [order, setOrder] = useState(initialOrder);
    const orderId = location.state.orderId;
    console.log(orderId);
    let orderdetail = (
        <div>
            <h1>This is Order Detail Page</h1>
            <p>OrderID: {orderId}</p>
            <table>
                <tbody>
                    <tr>
                        <td>_id</td>
                        <td>{order._id}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{order.status}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{order.date.$date}</td>
                    </tr>
                    <tr>
                        <td>totalAmount</td>
                        <td>{order.totalAmount}</td>
                    </tr>
                    <tr>
                        <td>Change Staus: </td>
                        <button>MoveToSHIPPED</button>
                        <button>MoveToDELIVERED</button>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    return orderdetail;
} 