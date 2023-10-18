import React from 'react'
import { Link } from 'react-router-dom'
import ShowOnLogin, { ShowOnLogout } from './hiddenLink/hiddenLink'

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">ET BS</div>
      <ul className="nav-links">
      <ShowOnLogin>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ShowOnLogin>
        <li><Link to="/about">About</Link></li>

        <ShowOnLogout>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to='/'>Login</Link></li>
        </ShowOnLogout>
      </ul>
    </div>
  )
}

export default Header