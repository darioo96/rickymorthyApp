import React from 'react'
import "./styles/Categorias.css"

function Categorias(props) {
return (
        <div className="contenedor-cat">
            <div className="figura">
                <button onClick={"./"} >
                    <div className = "categorias">
                        <img src={props.img}/>              
                        <div className="capa">
                        <p>{props.text}</p>
                        </div>
                    </div> 
                </button>

            </div>
        </div>
    
)
}

export default Categorias
