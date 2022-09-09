import React from 'react'
import "./Navbar.css"

const Navbar = ({isScrolling}) => {
  return (
    <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo'>img</div>
    </div>
  )
}

export default Navbar