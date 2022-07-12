import PokemonCard from '@components/Molecules/PokemonCard'

const PokedexList = ({ pokemonData }, props) => {
  const pokedexList = pokemonData.map((pokemon) => {
    <PokemonCard
      key={pokemon.id}
    />
  })
  return (
    <ul className="pokedex">
      <h2 className='pokedex__title'>Pokedex</h2>
      {props.children}
    </ul>
  )
}
export default PokedexList