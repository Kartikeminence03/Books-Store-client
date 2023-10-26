import { createSlice } from "@reduxjs/toolkit";

import { 
  login,
  register,
  addToCart
} from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  cart: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isLoggedIn: false,
  message: "",
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn= true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, {error}) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoggedIn= false;
        state.message = error;
        state.isLoading = false;
      })
      .addCase(register.fulfilled, (state, {payload}) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
        state.message = "success";
      })
      .addCase(register.rejected, (state, {error}) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = error;
        state.isLoading = false;
      })
      .addCase(addToCart.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled,(state,{payload})=>{
        // console.log("-----payload------", payload);
        if(payload.status){
          state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = [...state.cart, payload?.product];
        localStorage.setItem("product", JSON.stringify(state.cart, payload?.product))
        // console.log(state.cart);
        state.message = "success";
        }
      })
      .addCase(addToCart.rejected,(state,action)=>{
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
  },
});

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;