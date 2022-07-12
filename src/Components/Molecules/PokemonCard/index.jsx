import { Link } from 'react-router-dom'
import './styles.scss'

export const capitalize = (str = "") => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatId = (id) => {
  if (id < 10) return `#00${id}`;
  if (id < 100) return `#0${id}`;
  return `#${id}`;
};

const PokemonCard = ({ name, types, id, sprites }) => {

  return (
    <li className={`pokemonCard pokemonCard--${types[0].type.name}`}>

      <div className="pokemonCard__pokemonInfoLeft">
        <h2 className="pokemonCard__pokemonName">{capitalize(name)}</h2>
        {types.map(item => {
          return (
            <span key={item.slot} className="pokemonCard__pokemonType">{item.type.name}</span>
          )
        })}
      </div>
      <div className="pokemonCard__pokemonInfoRight">
        <span className="pokemonCard__pokemonNumber">{formatId(id)}</span>
        <img className='pokemonCard__pokemonImage' src={sprites.other['official-artwork']['front_default']} alt="" />
      </div>
    </li>
  )
}
export default PokemonCard