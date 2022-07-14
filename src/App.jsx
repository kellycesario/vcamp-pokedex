import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '@components/Organisms/Homescreen';
import Pokedex from '@components/Pages/Pokedex'
import ChosenPokemon from '@components/Organisms/ChosenPokemon'
import { ContextProvider } from '@context/context';

import About from '@components/atoms/menuAbout'
import BaseStats from '@components/atoms/menuBaseStats'
import Evolution from '@components/atoms/menuEvolution'
import Moves from '@components/atoms/menuMoves'

import './App.scss'

function App() {

  return (
    <div className='App'>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='pokedex' element={<Pokedex />} />
          <Route path='pokedex/:pokemonId/*' element={<ChosenPokemon />} >
            <Route path='about' element={<About />} />
            <Route element={<BaseStats />} path="basestats" />
            <Route element={<Evolution />} path="evolution" />
            <Route element={<Moves />} path="moves" />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  )
}

export default App