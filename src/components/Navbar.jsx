import React from 'react'
import NavLink from './NavLink'


function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
