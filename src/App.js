import Categorias from "./components/Categorias";
import Navbar from "./components/Navbar";
import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import Tarjetas from "./components/Tarjetas";

function App() {
    return (
      <BrowserRouter>
        <Switch> 

        <Route path="/personajes">
          <Navbar/>
          <Tarjetas url ="https://rickandmortyapi.com/api/character"/>
        </Route>

          <Route path="/episodios">
            <Navbar/>
            <Tarjetas url ="https://rickandmortyapi.com/api/episode"/>
          </Route>

          <Route path="/localizaciones">
            <Navbar/>
            <Tarjetas url ="https://rickandmortyapi.com/api/location"/>
          </Route>

          <Route path="/">
            <Navbar1/>
            <Categorias text="PERSONAJES" url="/personajes" img="https://i.pinimg.com/originals/25/6c/70/256c70454cf12a439b787b38c3230735.png"/>
            <Categorias text="LOCALIZACIONES" url="/localizaciones" img="https://c.wallhere.com/photos/c1/64/Rick_and_Morty_space-1341343.jpg!d"/>
            <Categorias text="EPISODIOS" url="/episodios" img="https://c.wallhere.com/photos/17/ab/1920x1080_px_Adult_Swim_animation_planet_Rick_And_Morty_space-660250.jpg!d"/>
          </Route>
        </Switch>          
        <Footer/>
      </BrowserRouter>
    );
}


export default App;
