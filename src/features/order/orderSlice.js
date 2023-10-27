import { createSlice } from "@reduxjs/toolkit";
import { buyProduct, createPayment } from "./orderservices";

const initialState = {
    orders: [],
    orderHistory: [],
    orderSuccess: false,
    orderObject: null,
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
            console.log(state.orderObject);
            if (payload.status) {
              state.orderSuccess = true;
              localStorage.setItem("orderId", payload?.newOrder?._id);
              state.orderObject = payload.orderResponse;
            // state.orders = [...payload?.order?.product]
            }
        })
        .addCase(buyProduct.rejected, (state, { error }) => {
            state.error = error.message;
        })
        .addCase(createPayment.pending,(state) => {
            state.error = "";
        })
        .addCase(createPayment.fulfilled, (state, { payload }) => {
            if (payload.status) {
                state.orderSuccess = true;
            }
        })
        .addCase(createPayment.rejected, (state, { error }) => {
            state.error = error.message;
        })
    }
})


const orderReducer = order.reducer;

export { orderReducer }
  