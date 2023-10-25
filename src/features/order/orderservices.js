import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getAuthorConfig from "../../UserToken";



const buyProduct = createAsyncThunk(
    
    "buy_product",
    async () => {
      try {
        const config = getAuthorConfig();
        const response = await axios.post(`${base_url}user/cart/cash-order`,
          {UPI: true},
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