import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/baseUrl'
import getAuthorConfig from '../UserToken';
import { format } from "date-fns";

const OrderSection = () => {
    const [userOrder, setUserOrder] = useState([]);

    const getAllUserOrder = async()=>{
        const config = getAuthorConfig()
        const response = await axios.get(`${base_url}order/us-order`, config);
        const orderData = await response.data;
        const ordersde = await orderData.orders;
        setUserOrder(ordersde)
    }

    useEffect(()=>{
        getAllUserOrder()
    },[])
  return (
    <div className="container mx-auto p-5">
  <table className="min-w-full table-auto border border-gray-300">
    <thead>
      <tr>
        <th className="border p-2">Total Amount</th>
        <th className="border p-4">Date</th>
        <th className="border p-4">Status</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- Product Row 1 --> */}
        {userOrder.map((order,index)=>{
            const date = new Date(order.createdAt)
            const formatedDate = format(date, "MM/dd/yyyy");
            return <>
              <tr key={index}>
                <td className="border p-4">{order.totalAmount}</td>
                <td className="border p-4">{formatedDate}</td>
                <td className="border p-4">{order.orderStatus}</td>
              </tr>
            </>
        })}
    </tbody>
  </table>
</div>
  )
}

export default OrderSection