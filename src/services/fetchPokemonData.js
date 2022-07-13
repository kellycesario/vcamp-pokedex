export const fetchPokemonData = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    return error
  }
}

export const fetchPokemon = async (pokemon) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    return error
  }
}

