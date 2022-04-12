import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PaginaLocalizaciones from "./Paginas/PaginaLocalizaciones";
import PaginaMenu from "./Paginas/PaginaMenu";
import PaginaPersonajes from "./Paginas/PaginaPersonajes"
import PaginaEpisodios from "./Paginas/PaginaEpisodios"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaMenu/>}/>
        <Route path="/localizaciones" element={<PaginaLocalizaciones/>}/>
        <Route path="/personajes" element={<PaginaPersonajes/>}/>
        <Route path="/episodios" element={<PaginaEpisodios/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
