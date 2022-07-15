import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { fetchPokemon, fetchPokemonData, fetchDescription, fetchPokemonGender } from '@services/fetchPokemonData'

const initialContextValue =
{
  pokemonList: [],
  pokemon: {},
  pokemonDescription: [],
  pokemonGender: {},
  isLoading: true,
  handleSubmit: () => { },

}

export const Context = createContext(initialContextValue);

export const ContextProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [pokemonDescription, setPokmemonDescription] = useState({})
  const [pokemonGender, setPokmemonGender] = useState({})

  const navigateToPokemon = useNavigate()

  const getPokemonList = async () => {
    const res = await fetchPokemonData()

    const { results } = res

    results.forEach(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      setPokemonList(prevList => [...prevList, data])
    })
  }

  const getPokemon = async (name) => {
    const pokemonData = await fetchPokemon(name)
    setPokemon(pokemonData)
  }

  const getDescription = async (name) => {
    const pokemonDescription = await fetchDescription(name)
    setPokmemonDescription(pokemonDescription)
  }

  const getPokemonGender = async (name) => {
    const pokemonGender = await fetchPokemonGender(name)
    setPokmemonGender(pokemonGender)
  }

  const handleSubmit = async (ev, pokemonName) => {
    ev.preventDefault()

    const pokemon = pokemonName.toLowerCase()

    await getPokemon(pokemon)
    await getDescription(pokemon)
    await getPokemonGender(pokemon)

    navigateToPokemon(`/pokedex/${pokemonName}/about`)
  }

  useEffect(() => {
    getPokemonList()
  }, [])

  return (
    <Context.Provider value={{ pokemonList, pokemon, pokemonDescription, pokemonGender, handleSubmit }}>
      {children}
    </Context.Provider>
  )
}
