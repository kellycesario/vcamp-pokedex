import PokedexListItem from '../../Molecules/PokedexListItem'
import './styles.scss'

const Pokedex = () => {
  return (
    <div className='pokedexPage'>

      <div className='navigation'>

        <div className='navigation__backBtnContainer'>
          <button className='navigation__backBtn'>
            {'<-'}
          </button>
        </div>

        <div className='navigation__toggleContainer'>
          <button className='navigation__toggle'>
            {'='}
          </button>
        </div>

      </div>

      <div className="pokedex">
        <h2>Pokedex</h2>
        <ul className="pokedex__list">
          <PokedexListItem />
        </ul>
      </div>

    </div>
  )
}
export default Pokedex