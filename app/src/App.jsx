import { useEffect, useState } from 'react';
import PokemonForm from './views/PokemonForm';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NavigationBar from './components/NavigationBar';
import PokemonDetails from './views/PokemonDetails';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPokemon" element={<PokemonForm />} />
        <Route path='/searchPokemon/:id' element={<PokemonDetails/>} />
      </Routes>
    </>
  );
};
export default App;
