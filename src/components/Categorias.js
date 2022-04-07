import React from 'react'
import "./styles/Categorias.css"

function Categorias(props) {
  return (
      <div className="contenedor-cat">
          <a href={props.url} className ="figura">
            <div className = "categorias">
                <img src={props.img}/>              
                <div className="capa">
                    <p>{props.text}</p>
                </div>
            </div>        
         </a>
      </div>
    
  )
}

export default Categorias
