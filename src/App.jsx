import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '@components/Organisms/Homescreen';
import Pokedex from '@components/Pages/Pokedex'
import ChosenPokemon from '@components/Organisms/ChosenPokemon'
import { ContextProvider } from '@context/context';

import './App.scss'

function App() {

  return (
    <div className='App'>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='pokedex' element={<Pokedex />} />
          <Route path='pokemon/*' element={<ChosenPokemon />} />
        </Routes>
      </ContextProvider>
    </div>
  )
}

export default App