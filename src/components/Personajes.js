import React, { useEffect } from 'react'


function Personajes(props) {
        const initialUrl = props.url;
        const fetchCharacters = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    useEffect(() => {
        fetchCharacters(initialUrl);
    },[])

    return (
        <div>
            <h1>Personajes</h1>
        </div>
    )
}

export default Personajes