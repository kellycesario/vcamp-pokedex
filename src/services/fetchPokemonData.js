export const fetchPokemonData = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
    if (!res.ok) return
    const data = await res.json();
    return data;
  } catch (error) {
    return error
  }
}

export const fetchPokemon = async (pokemon) => {
  if (!pokemon) return
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!res.ok) return
    const data = await res.json();
    return data;
  } catch (error) {
    return error
  }
}

export const fetchDescription = async (pokemon) => {
  if (!pokemon) return
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    if (!res.ok) return
    const data = await res.json()
    return data
  } catch (error) {
    return error
  }
}

export const fetchPokemonGender = async (pokemon) => {
  if (!pokemon) return
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/gender/${pokemon}`)
    if (!res.ok) return
    const data = await res.json()
    return data
  } catch (error) {
    return error
  }
}

