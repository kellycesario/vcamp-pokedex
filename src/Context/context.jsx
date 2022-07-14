import React, { createContext, useState, useEffect } from "react";
import { fetchPokemon } from '@services/fetchPokemonData'
import { fetchPokemonData } from "../services/fetchPokemonData";

const initialContextValue =
{
  pokemonList: [],
  pokemon: {},
  pokemonSearch: '',
  isLoading: true,
  handleChange: () => { },
  handleSubmit: () => { },
  setPokemonSearch: () => { }
}

export const Context = createContext(initialContextValue);

export const ContextProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonSearch, setPokemonSearch] = useState('')

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
  }

  const handleChange = (ev) => {
    setPokemonSearch(ev.target.value)
  }

  useEffect(() => {
    getPokemonList()
  }, [])

  // Effect que busca um pokemon quando o valor do pokemon altera

  useEffect(() => {
    getPokemon(pokemonSearch)
  }, [pokemonSearch])

  return (
    <Context.Provider value={{ pokemonList, pokemon, isLoading, handleChange, handleSubmit, setPokemonSearch, pokemonSearch }}>
      {children}
    </Context.Provider>
  )
}
