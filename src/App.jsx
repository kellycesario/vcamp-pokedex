import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '@components/Organisms/Homescreen';
import Pokedex from '@components/Pages/Pokedex'
import ChosenPokemon from '@components/Organisms/ChosenPokemon'

import './App.scss'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/homepage' element={<Homepage />}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
        <Route path='/chosen' element={<ChosenPokemon />}></Route>
      </Routes>
    </div>
  )
}

export default App