import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { orderReducer } from "../features/order/orderSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    order: orderReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// export default store;







// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
// import { orderReducer } from "../features/order/orderSlice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "user",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, authReducer)

// const rootReducer = combineReducers({
//     auth: persistedReducer,
//     order: orderReducer,
// });

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// })

// // export default store;

// export const persistor = persistStore(store);