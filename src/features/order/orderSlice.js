import { createSlice } from "@reduxjs/toolkit";
import { buyProduct } from "./orderservices";

const initialState = {
    orders: [],
    orderHistory: [],
    orderSuccess: false,
    error: "",
};

const order = createSlice({
    name: "order",
    initialState,
    reducers:{},
    extraReducers: (buildeer)=>{
        buildeer
        .addCase(buyProduct.pending, (state)=>{
            state.error = "";
        })
        .addCase(buyProduct.fulfilled, (state, { payload }) => {
            if (payload.status) {
              state.orderSuccess = true;
              state.orders = [...payload?.order?.products];
            }
        })
        .addCase(buyProduct.rejected, (state, { error }) => {
            state.error = error.message;
        })
    }
})


const orderReducer = order.reducer;

export { orderReducer }
  