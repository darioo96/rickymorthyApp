import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
  return (
        <nav className='nav-container'>
            <Link to='/' className='logo'>
                <h2>Rick y Morthy</h2>
            </Link>
            
            <ul>
                <li><Link to='/personajes'>Personajes</Link></li>
                <li><Link to='/localizaciones'>Localizaciones</Link></li>
                <li><Link to='/episodios'>Episodios</Link></li>
            </ul>
        </nav>
  )
}
export default Navbar