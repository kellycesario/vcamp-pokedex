import { useEffect, useState } from 'react';

const usePokemonFetch = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadURL, setLoadURL] = useState('https://pokeapi.co/api/v2/pokemon');

  const getAllPokemons = async () => {
    const res = await fetch(loadURL)
    const data = await res.json()

    setLoadURL(data.next)

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const pokemonData = await res.json()

        setPokemonList(prevList => [...prevList, pokemonData])
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return { pokemonList };
};

export default usePokemonFetch;