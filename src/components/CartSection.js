import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { base_url } from '../utils/baseUrl';
import getAuthorConfig from '../UserToken';
import {useDispatch} from 'react-redux'
import {useNavigate}  from 'react-router-dom'
import { buyProduct } from '../features/order/orderservices';
import { toast } from 'react-toastify';

const CartSection = () => {
    const [cartData, setCartData] =  useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getallCart = async()=>{
        const config = getAuthorConfig()
        const response = await axios.get(`${base_url}user/cart`,config)
        const data = await response.data;
        setCartData(data);
    }

    const checkoutFun = ()=>{
      dispatch(buyProduct());
      // navigate('/order')
    }

    if(checkoutFun===true){
      navigate('/order')
      toast.success("success")
  }

    useEffect(()=>{
        getallCart()
    },[])

  return (
    <div className="container mx-auto p-5">
  <table className="min-w-full table-auto border border-gray-300">
    <thead>
      <tr>
        <th className="border p-2">Product Name</th>
        <th className="border p-4">Count</th>
        <th className="border p-4">Price</th>
        {/* <th className="border p-4">Actions</th> */}
      </tr>
    </thead>
    <tbody>
      {/* <!-- Product Row 1 --> */}
        {cartData.map((cart,index)=>{
            return cart.products.map((product,  index) => {
                return <>
                    <tr key={index}>
                        <td className="border p-2">{product.product.title}</td>
                        <td className="border p-4">{product.count}</td>
                        <td className="border p-4">{product.product.price}</td>
                    </tr>
                </>
            })
        })}
    </tbody>
  </table>

  <div className="container p-2">
  {/* <!-- Total Price Box --> */}
  <div className="mt-4 p-2 border border-gray-300 w-1/4">
    <p className="text-lg font-semibold">Total Price:</p>
    {cartData.map((item,index)=>{
        return(
            <>
            <p className="text-xl font-bold text-green-600">₹{item.cartTotal}</p>
            </>
        )
    })}
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