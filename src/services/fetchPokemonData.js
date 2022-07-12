export const fetchPokemonData = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    return await res.json();
  } catch (error) {
    console.log(error)
    return error
  }
}

export const fetchPokemon = async (pokemon) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return await res.json();
  } catch (error) {
    console.log(error)
    return error
  }
}

