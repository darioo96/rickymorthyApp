import Categorias from "./components/Categorias";
import Navbar from "./components/Navbar";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";


function App() {
  const eleccion = () => {
    
  }

  return (
    <>
      <Navbar1/>
      <Categorias text="PERSONAJES" img="https://i.pinimg.com/originals/25/6c/70/256c70454cf12a439b787b38c3230735.png"/>
      <Categorias text="LOCALIZACIONES" img="https://c.wallhere.com/photos/c1/64/Rick_and_Morty_space-1341343.jpg!d"/>
      <Categorias text="EPISODIOS" img="https://c.wallhere.com/photos/17/ab/1920x1080_px_Adult_Swim_animation_planet_Rick_And_Morty_space-660250.jpg!d"/>
      <Footer/>
    </>
  );
}
export default App;
