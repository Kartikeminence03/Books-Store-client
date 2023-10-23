import React from 'react'
import Heading from '../components/Heading'
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/auth/authSlice";
import CartSection from '../components/CartSection';

const Cart = () => {
  return (
    <>
    <div>
      <Heading heading='Cart'/>
      <CartSection/>
    </div>
    </>
  )
}

export default Cart