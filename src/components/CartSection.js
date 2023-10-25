import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyProduct } from '../features/order/orderservices';
import { toast } from 'react-toastify';

const CartSection = () => {
    const userData = useSelector((state) => state?.auth);
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state?.auth);

    const totalPrice = userData?.cart.reduce((accumulator, currentItem) => {
      // return accumulator + currentItem.price;
    }, 0);

    console.log(userData);

    const checkoutFun = ()=>{
      dispatch(buyProduct({ cart: userData?.cart, totalAmount: totalPrice }));
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
        {cart.map((UsCartData,index)=>{
          return(
            <tr>
              <td className="border p-2">{UsCartData.title}</td> 
              <td className='border p-2'>{UsCartData.price}</td>
            </tr>
          )
        })}
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