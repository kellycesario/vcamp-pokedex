import './styles.scss'
const PokedexListItem = () => {
  return (
    <li className="listItem">
      <div className="listItem__pokemonInfoLeft">
        <h2 className="listItem__pokemonName">Bubassaur</h2>
        <span className="listItem__pokemonType">Grass</span>
        <span className="listItem__pokemonType">Poison</span>
      </div>
      <div className="listItem__pokemonInfoRight">
        <span className="listItem__pokemonNumber">#001</span>
        <img className='listItem__pokemonImage' src="https://cdn.traction.one/pokedex/pokemon/1.png" alt="" />
      </div>
    </li>
  )
}
export default PokedexListItem