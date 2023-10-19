import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import {FaOpencart} from 'react-icons/fa'
import ShowOnLogin from "./hiddenLink/hiddenLink";
// import ShowOnLogin, { ShowOnLogout } from "./hiddenLink/hiddenLink";

const Header = () => {
  const [dropdownButton, setDropdownButton] = useState(false);
  return (
    <div className="navbar bg-red-500 p-4">
  <div className="logo text-white text-2xl font-bold">ET BS</div>
  <ul className="nav-links flex space-x-4">
    <li>
      <ShowOnLogin>
      <Link to="/home" className="text-white hover:text-red-600">
        Home
      </Link>
      </ShowOnLogin>
    </li>
    <li>
      <Link to="/addtocart" className="text-white hover:text-red-600">
        <FaOpencart className="text-3xl" />
      </Link>
    </li>
    <li className="relative">
      <AiOutlineUser className="text-xl text-white hover:text-red-600" />
      {dropdownButton && (
        <div className="absolute right-2 p-2 w-20 bg-white border rounded shadow-lg" style={{ zIndex: 100 }}>
          <ul>
            <li>
              <button className="text-black">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </li>
  </ul>
</div>
  );
};

export default Header;
