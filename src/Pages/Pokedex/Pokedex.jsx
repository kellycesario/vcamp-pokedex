import PokedexListItem from '@components/Molecules/listTest'
import Navbar from '@components/Organisms/Navbar'
import Popup from '@components/Organisms/Popup'
import './styles.scss'

const Pokedex = () => {
  return (
    <div className='pokedexPage'>
      <div className="pokedexPage__container">
        <Navbar />
        <div className="pokedex">
          <h2 className='pokedex__title'>Pokedex</h2>
          <ul className="pokedex__list">
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <PokedexListItem />
            <Popup />
          </ul>
        </div>

      </div>
    </div>
  )
}
export default Pokedex