import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header