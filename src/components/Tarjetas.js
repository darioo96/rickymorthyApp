import React, { useEffect } from 'react'
import './styles/Tarjetas.css'

function Tarjetas(props) {
  const initialUrl = props.url;

  const fetchCharacters =  (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  return (
    <>
        <div className="contenedor">
          <div className="caja-tarjetas">

          </div>
        </div>
    </>
  )
}


export default Tarjetas