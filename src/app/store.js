import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { orderReducer } from "../features/order/orderSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    order: orderReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;

















// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";

// export const store = configureStore({
//     reducer:{
//         auth: authReducer,
//     }
// })