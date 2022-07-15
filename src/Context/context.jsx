import React, { createContext, useState, useEffect } from "react";
import { fetchPokemon } from '@services/fetchPokemonData'
import { fetchPokemonData } from "../services/fetchPokemonData";
import { useNavigate } from 'react-router-dom';

const initialContextValue =
{
  pokemonList: [],
  pokemon: {},
  isLoading: true,
  handleSubmit: () => { },
}

export const Context = createContext(initialContextValue);

export const ContextProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
    setIsLoading(false)
  }

  const handleSubmit = (ev, pokemonName) => {
    ev.preventDefault()
    getPokemon(pokemonName.toLowerCase())
    navigateToPokemon(`/pokedex/${pokemonName}/about`)
  }

  useEffect(() => {

    getPokemonList()
  }, [])

  return (
    <Context.Provider value={{ pokemonList, pokemon, isLoading, handleSubmit, }}>
      {children}
    </Context.Provider>
  )
}
