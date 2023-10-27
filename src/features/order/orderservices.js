import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getAuthorConfig from "../../UserToken";



const buyProduct = createAsyncThunk(
    
    "buy_product",
    async ({ cart, totalAmount }) => {
      try {
        const config = getAuthorConfig();
        const response = await axios.post(`${base_url}order/create-order`,
        { products: cart, totalAmount },
          config
        );
        return await response.data;
      } catch (error) {
        return error;
      }
}
);

const createPayment = createAsyncThunk("create_payment", async({
  order_id,
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
  order_status,
})=>{
  try {
    const config = getAuthorConfig();
    const response = await axios.post(`${base_url}payment/paymentVerification`,{
      order_id,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      order_status,
    }, config);

    // console.log(order_id);

    return response.data;
  } catch (error) {
    return error
  }
})

export {
    buyProduct,
    createPayment
}