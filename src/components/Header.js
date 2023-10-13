import React from 'react'
import { Link } from 'react-router-dom'
import ShowOnLogin, { ShowOnLogout } from './hiddenLink/hiddenLink'

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li>
          <ShowOnLogin>
          <Link to="/">Home</Link>
          </ShowOnLogin>
          {/* <Link to="/">Home</Link> */}
      </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <ShowOnLogout>
          <Link to="/signup">Signup</Link>
          </ShowOnLogout>
          {/* <Link to="/signup">Signup</Link> */}
        </li>
      </ul>
    </div>
  )
}

export default Header