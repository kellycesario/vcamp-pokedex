import { Routes, Route, Link } from 'react-router-dom';

import Pokedex from '@components/Pages/Pokedex'

import './App.scss'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h2>Home</h2>}></Route>
        <Route path='/pokedex' element={<Pokedex />}></Route>
      </Routes>
    </div>
  )
}

export default App