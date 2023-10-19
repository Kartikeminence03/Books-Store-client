import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import ShowOnLogin, { ShowOnLogout } from "./hiddenLink/hiddenLink";

const Header = () => {
  const [dropdownButton, setDropdownButton] = useState(false);
  return (
    <div className="navbar bg-red-500 p-4">
      <div className="logo text-white text-2xl font-bold">ET BS</div>
      <ul className="nav-links flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-red-600">
            Home
          </Link>
        </li>
        <li
          className="relative text-white hover:text-red-600"
          onMouseEnter={() => setDropdownButton(true)}
          onMouseLeave={() => setDropdownButton(false)}
        >
          <AiOutlineUser className="text-xl" />
          {dropdownButton && (
            <div
              className="absolute right-2 p-2 w-20 bg-white border rounded shadow-lg"
              style={{ zIndex: 100 }}
            >
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
