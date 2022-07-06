import { useEffect } from 'react'

import PokedexListItem from '@components/Molecules/PokemonCard'
import Navbar from '@components/Organisms/Navbar'
import Popup from '@components/Organisms/Popup'
import './styles.scss'
import useFetch from '@hooks/usePokemonFetch'

const Pokedex = () => {
  const { pokemonData } = useFetch()

  return (
    <div className='pokedexPage'>
      <div className="pokedexPage__container">
        <Navbar />
        <div className="pokedex">
          <h2 className='pokedex__title'>Pokedex</h2>
          <ul className="pokedex__list">
            <PokedexListItem />
            <Popup />
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Pokedex