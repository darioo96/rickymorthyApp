import React from 'react'
import './styles/Navbar.css'

function Navbar() {
  return (
        <nav className='nav-container'>
            <a href="." className="logo">
                <h2>Rick y Morthy</h2>
            </a>
            <ul>
                <li><a href="/personajes">Personajes</a></li>
                <li><a href="/localizaciones">Localizaciones</a></li>
                <li><a href="/episodios">Episodios</a></li>
            </ul>
        </nav>
  )
}
export default Navbar