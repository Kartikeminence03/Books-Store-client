import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyProduct, createPayment } from '../features/order/orderservices';
import { toast } from 'react-toastify';
import axios from 'axios';
import { base_url } from '../utils/baseUrl';
import getAuthorConfig from '../UserToken';
import { useNavigate } from 'react-router-dom';

const CartSection = () => {
    const [productDatat, setProductData] = useState([])
    const navigate = useNavigate();
    const userData = useSelector((state) => state?.auth);
    const dispatch = useDispatch();
    const orderData = useSelector((state) => state?.orders);
    const product = JSON.parse(localStorage.getItem("product")) || "";
    const usData = userData?.user;

    useEffect(()=>{
      setProductData(product)
    },[])

    const totalPrice = !productDatat===false?productDatat.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0):"0";

    const loaclStorageProductDelete = ()=>localStorage.removeItem("product")
    const loaclStorageOderID_Delete = ()=>localStorage.removeItem("orderId")



    const checkoutFun = async()=>{
      const config = getAuthorConfig();
      dispatch(buyProduct({ cart: productDatat, totalAmount: totalPrice }));

      const {data:{key}} = await axios.get(`${base_url}getkey`)


      // const {data:{order}} = await axios.post(`${base_url}payment/payment-checkout`,{
      //   amount: 8000
      // }, config)

      const options = {
        key:"rzp_test_ciiP0etOpKCyQo", 
        amount: 800000, 
        currency: "INR",
        name: "ET BS",
        description: "Test Transaction",
        image: "https://eminencetechnology.com/wp-content/uploads/2022/12/logo_f.png",
        order_id: orderData?.orderObject?.id,
        handler: async(response)=>{
          const {
            razorpay_order_id, 
            razorpay_payment_id, 
            razorpay_signature
          } = await response;
          console.log(razorpay_order_id,"=====<<<<<<<<....>>>>>>>>>>");
          dispatch(
            createPayment({
              order_id: localStorage.getItem("orderId"),
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              order_status: "success",
            })
          )
          navigate("/order")
          loaclStorageProductDelete()
          loaclStorageOderID_Delete()
          toast.success("Payment Successfuly")

        },
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
        {!productDatat===false?productDatat.map((UsCartData,index)=>{
          // console.log(productDatat,"=========...>>>>");
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