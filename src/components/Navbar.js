import React from 'react'
import './styles/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <a href="." class="logo">
                <h2>Rick y Morthy</h2>
            </a>
            <ul>
                <li><a href="#">Personajes</a></li>
                <li><a href="#">Ubicaciones</a></li>
                <li><a href="#">Episodios</a></li>
            </ul>
        </nav>
    </div>
  )
}
export default Navbar