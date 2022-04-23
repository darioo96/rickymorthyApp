import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar1() {
  return (
    <nav className='nav-container'>
      <Link to='/' className='logo'>
        <h2>Rick y Morthy</h2>
      </Link>
    </nav>
  )
}

export default Navbar1