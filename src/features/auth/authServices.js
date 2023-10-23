import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const data = JSON.parse(localStorage.getItem("user")) || "";
const config = {
  headers: {
    Authorization: `Bearer ${data?.token}`,
  },
};
const login = async (user) => {
  const response = await axios.post(`${base_url}user/login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (user) => {
  const response = await axios.post(`${base_url}user/register`, user);
  return response.data;
};

const addToCart = async(user)=>{
  try {
    // const config = getAuthorizationConfig();
    const response = await axios.post(`${base_url}user/cart`, user, config)
    return response.data;
  } catch (error) {
    return error
  }
}

const authService = {
  login,
  register,
  addToCart,
};

export default authService;