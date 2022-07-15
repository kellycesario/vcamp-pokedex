import { Link } from 'react-router-dom'
import './styles.scss'

import { capitalize, formatId } from '@utils/formatData'
import { useContext } from 'react'
import { Context } from '@context/context'

const PokemonCard = ({ name, types, id, sprites }) => {

  const { handleSubmit } = useContext(Context)

  return (
    <Link to={`/pokedex/${name}/about`} className="pokemonCard__routerLink">
      <li className={`pokemonCard pokemonCard--${types[0].type.name}`} onClick={(ev) => handleSubmit(ev, name)}>

        <div className="pokemonCard__pokemonInfoLeft">
          <h2 className="pokemonCard__pokemonName">{capitalize(name)}</h2>
          {types.map(item => {
            return (
              <span key={item.slot} className="pokemonCard__pokemonType">{capitalize(item.type.name)}</span>
            )
          })}
        </div>
        <div className="pokemonCard__pokemonInfoRight">
          <span className="pokemonCard__pokemonNumber">{formatId(id)}</span>
          <img className='pokemonCard__pokemonImage' src={sprites.other['official-artwork']['front_default']} alt="" />
        </div>
      </li>
    </Link>
  )
}
export default PokemonCard