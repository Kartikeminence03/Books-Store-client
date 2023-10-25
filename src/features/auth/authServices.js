import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import getAuthorConfig from "../../UserToken";
import { createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("User_Login", async (user) => {
  const response = await axios.post(`${base_url}user/login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
})

const register = createAsyncThunk("User_SignUp", async (user) => {
  try {
    const response = await axios.post(`${base_url}user/register`, user);
  return response.data;
  } catch (error) {
    return error
  }
})

const addToCart = createAsyncThunk("Add_To_Cart", async(prodId)=>{
  try {
    const config = getAuthorConfig();
    const response = await axios.post(`${base_url}cart/addtocart`, 
    {productId:prodId}, 
    config
    )
    return response.data;
  } catch (error) {
    return error
  }
})


export { 
  addToCart,
  login,
  register,
}