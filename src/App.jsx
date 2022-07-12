import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '@components/Organisms/Homescreen';
import Pokedex from '@components/Pages/Pokedex'

import './App.scss'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/homepage' element={<Homepage />}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
      </Routes>
    </div>
  )
}

export default App