import './styles.scss'
const PokemonCard = () => {
  return (
    <li className="pokemonCard">
      <div className="pokemonCard__pokemonInfoLeft">
        <h2 className="pokemonCard__pokemonName">Bubassaur</h2>
        <span className="pokemonCard__pokemonType">Grass</span>
        <span className="pokemonCard__pokemonType">Poison</span>
      </div>
      <div className="pokemonCard__pokemonInfoRight">
        <span className="pokemonCard__pokemonNumber">#001</span>
        <img className='pokemonCard__pokemonImage' src="https://cdn.traction.one/pokedex/pokemon/1.png" alt="" />
      </div>
    </li>
  )
}
export default PokemonCard