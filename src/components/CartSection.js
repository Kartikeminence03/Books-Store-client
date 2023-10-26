import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyProduct } from '../features/order/orderservices';
import { toast } from 'react-toastify';
import axios from 'axios';
import { base_url } from '../utils/baseUrl';
import getAuthorConfig from '../UserToken';

const CartSection = () => {
    const [productDatat, setProductData] = useState([])
    const userData = useSelector((state) => state?.auth);
    // const dispatch = useDispatch();
    const { cart } = useSelector((state) => state?.auth);
    const product = JSON.parse(localStorage.getItem("product")) || "";

    const usData = userData?.user;

    useEffect(()=>{
      setProductData(product)
    },[])

    const totalPrice = productDatat===true?productDatat.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0):"0";



    const checkoutFun = async()=>{
      const config = getAuthorConfig();
      // dispatch(buyProduct({ cart: userData?.cart, totalAmount: totalPrice }));

      const {data:{key}} = await axios.get(`${base_url}getkey`)


      const {data:{order}} = await axios.post(`${base_url}payment/payment-checkout`,{
        amount: 8000
      }, config)

      const options = {
        key, 
        amount: order.amount, 
        currency: "INR",
        name: "ET BS",
        description: "Test Transaction",
        image: "https://eminencetechnology.com/wp-content/uploads/2022/12/logo_f.png",
        order_id: order.id,
        callback_url: `${base_url}payment/paymentVerification`, config,
        prefill: {
            name: `${usData.firstname} ${usData.lastname}`,
            email: usData.email,
            contact: usData.mobile
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#ff2508"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();


    }





  return (
    <div className="container mx-auto p-5">
  <table className="min-w-full table-auto border border-gray-300">
    <thead>
      <tr>
        <th className="border p-2">Product Name</th>
        <th className="border p-4">Price</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- Product Row 1 --> */}
        {productDatat===true?productDatat.map((UsCartData,index)=>{
          return(
            <tr key={index}>
              <td className="border p-2">{UsCartData.title}</td> 
              <td className='border p-2'>{UsCartData.price}</td>
            </tr>
          )
        }):""}
    </tbody>
  </table>

  <div className="container p-2">
  {/* <!-- Total Price Box --> */}
  <div className="mt-4 p-2 border border-gray-300 w-1/4">
    <p className="text-lg font-semibold">Total Price:</p>
    <p className="text-xl font-bold text-green-600">₹{totalPrice}</p>
    {/* <!-- Button --> */}
    <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    onClick={checkoutFun}
    >
        Checkout
    </button>
  </div>
</div>

</div>

  )
}

export default CartSection