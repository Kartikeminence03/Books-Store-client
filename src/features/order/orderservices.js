import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getAuthorConfig from "../../UserToken";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const buyProduct = createAsyncThunk(
    
    "buy_product",
    async () => {
      try {
        const config = getAuthorConfig();
        const response = await axios.post(`${base_url}user/cart/cash-order`,
          {UPI: true},
          config
        );

        const navigate = useNavigate();
        if(response.data===true){
            navigate('/order')
            toast.success("success")
        }
        return await response.data;
      } catch (error) {
        return error;
      }
}
);

export {
    buyProduct,
}