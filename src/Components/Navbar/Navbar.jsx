import React from 'react'
import './Navbar.css'

function Navbar() {
  return (

    <div className='nav'>
      <div className="nav-logo">Travel</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li className='nav-contact'>Contact Us</li>

      </ul>

    </div>




  )
}

export default Navbar