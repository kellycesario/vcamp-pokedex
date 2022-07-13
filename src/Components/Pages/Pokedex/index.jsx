import PokemonCard from '@components/Molecules/PokemonCard'
import Navbar from '@components/Organisms/Navbar'
import Popup from '@components/Organisms/Popup'
import { useEffect } from 'react'
import { useState } from 'react'

import './styles.scss'

const Pokedex = () => {
   return (
    <div className='pokedexPage'>
      <div className="pokedexPage__container">
        <Navbar />
        <div className="pokedex">
          <h2 className='pokedex__title'>Pokedex</h2>
          <ul className="pokedex__list">
            {pokemonList.map(pokemon => {
              return (
                <PokemonCard name={pokemon.name} id={pokemon.id} types={pokemon.types} sprites={pokemon.sprites} key={pokemon.id} />
              )
            })}
            <Popup />
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Pokedex