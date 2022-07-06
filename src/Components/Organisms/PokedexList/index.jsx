import PokemonCard from '@components/Molecules/PokemonCard'


const PokedexList = ({ pokemonData }) => {
  const pokedexList = pokemonData.map((pokemon) => {
    <PokemonCard
      key={pokemon.id}
    />
  })
  return (
    <ul>
      { }
    </ul>
  )
}
export default PokedexList