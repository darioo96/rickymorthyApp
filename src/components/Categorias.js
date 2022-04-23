import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Categorias.css"

function Categorias(props) {
return (
        <div className="contenedor-cat">
            <div className="figura">
                <Link to="/episodios">
                    <div className = "categorias">
                        <img src={props.img}/>              
                        <div className="capa">
                        <p>{props.text}</p>
                        </div>
                    </div> 
                </Link>
            </div>
        </div>
    
)
}

export default Categorias
