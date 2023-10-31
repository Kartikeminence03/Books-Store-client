import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import {FiShoppingCart} from 'react-icons/fi'
import ShowOnLogin from "./hiddenLink/hiddenLink";
// import ShowOnLogin, { ShowOnLogout } from "./hiddenLink/hiddenLink";

const Header = () => {
  const [dropdownButton, setDropdownButton] = useState(false);
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.clear()
    navigate('/login')
  };

  // useEffect(()=>{
  //   return ()=>logout()
  // },[logout])

  return (
    <div className="navbar bg-red-500 p-4">
  <div className="logo text-white text-2xl font-bold">ET BS</div>
  <ul className="nav-links flex space-x-4">
    <li>
      <ShowOnLogin>
      <Link to="/" className="text-white hover:text-red-600">
        Home
      </Link>
      </ShowOnLogin>
    </li>
    <li>
      <ShowOnLogin>
        <Link to="/addtocart" className="text-white hover:text-red-600">
          <FiShoppingCart className="text-3xl" />
        </Link>
      </ShowOnLogin>
    </li>
    <ShowOnLogin>
      <li className="relative"
      onMouseEnter={() => setDropdownButton(true)}
      onMouseLeave={() => setDropdownButton(false)} 
      >
        <AiOutlineUser className="text-xl text-white hover:text-red-600" />
        {dropdownButton && (
          <div className="absolute right-2 p-2 w-20 bg-white border rounded shadow-lg" 
          style={{ zIndex: 100 }}>
            <ul>
              <li>
                <button className="text-black" onClick={()=>logout()}>Logout</button>
                <button className="text-black" onClick={()=>navigate('/order')}>Order</button>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ShowOnLogin>
  </ul>
</div>
  );
};

export default Header;
