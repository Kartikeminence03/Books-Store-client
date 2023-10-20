import React from 'react'
import Heading from '../components/Heading'
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/auth/authSlice";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <>
    <div>
      <Heading heading='Cart'/>
    </div>
    </>
  )
}

export default Cart