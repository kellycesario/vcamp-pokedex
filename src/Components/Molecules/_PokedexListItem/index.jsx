import './styles.scss'
const PokedexListItem = () => {
  return (
    <li className="listItem">
      <header className="listItem__header">
        <span className="listItem__pokemonNumber">#001</span>
        <h2 className="listItem__pokemonName">Bubassaur</h2>
      </header>
      <div className="listItem__infoContainer">
        <div className="listItem__pokemonInfoContainer">
          <span className="listItem__pokemonType">Grass</span>
          <span className="listItem__pokemonType">Poison</span>
        </div>
        <div className="listItem__pokemonImageContainer">
          <img className='listItem__pokemonImage' src="https://cdn.traction.one/pokedex/pokemon/1.png" alt="" />
        </div>
      </div>
    </li>
  )
}
