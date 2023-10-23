import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/baseUrl'
import getAuthorConfig from '../UserToken';
import { format } from "date-fns";

const OrderSection = () => {
    const [userOrder, setUserOrder] = useState([]);

    const getAllUserOrder = async()=>{
        const config = getAuthorConfig()
        const response = await axios.get(`${base_url}user/getallorders`, config);
        const orderData = await response.data;
        setUserOrder(orderData)
        console.log(orderData);
    }

    useEffect(()=>{
        getAllUserOrder()
    },[])
  return (
    <div className="container mx-auto p-5">
  <table className="min-w-full table-auto border border-gray-300">
    <thead>
      <tr>
        <th className="border p-2">Product Name</th>
        <th className="border p-4">Price</th>
        <th className="border p-4">Data</th>
        {/* <th className="border p-4">Actions</th> */}
      </tr>
    </thead>
    <tbody>
      {/* <!-- Product Row 1 --> */}
        {userOrder.map((order,index)=>{
            const date = new Date(order.createdAt)
            const formatedDate = format(date, "MM/dd/yyyy");
            return <>
                {order.products.map((product,  index) => {
                return <>
                    <tr key={index}>
                        <td className="border p-2">{product.product.title}</td>
                        <td className="border p-4">{product.product.price}</td>
                        <td className="border p-4">{formatedDate}</td>
                    </tr>
                </>
            })}
            </>
        })}
    </tbody>
  </table>
</div>
  )
}

export default OrderSection