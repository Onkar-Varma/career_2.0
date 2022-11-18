import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
        <div><Link to='/'>Shipping</Link></div>
        <ul className='nav_links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/details'>Details</Link></li>
          <li><Link to='/newOrder'>Create New Order</Link></li>
          <li><Link to='/newcustomer'> Create New Customer</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;