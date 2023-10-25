import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getAuthorConfig from "../../UserToken";



const buyProduct = createAsyncThunk(
    
    "buy_product",
    async ({ cart, totalAmount }) => {
      try {
        const config = getAuthorConfig();
        const response = await axios.post(`${base_url}user/cart/cash-order`,
        { products: cart, totalAmount },
          config
        );
        return await response.data;
      } catch (error) {
        return error;
      }
}
);

export {
    buyProduct,
}