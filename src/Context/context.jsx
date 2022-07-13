import React, { createContext, useState, useEffect } from "react";
import {fetchPokemon} from '@services/fetchPokemonData'
import { fetchPokemonData } from "../services/fetchPokemonData";

const initialContextValue = 
    {pokemons: [],
        pokemon: {} 
}
export const Context = createContext(initialContextValue);

export const ContextProvider = ({children}) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pokemonSearch, setPokemonSearch] = useState('')

    const getPokemonList = async () => {
      const res = await fetchPokemonData('')
  
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
        getPokemon(pokemonName)
        console.log(pokemonName)
    }

    const handleChange = (ev) => {
      setPokemonSearch(ev.target.value) 
    }

    useEffect(() => {
      getPokemonList()
    }, [])

    return (
        <Context.Provider value={{pokemonList, pokemon, pokemonSearch}}>
            {children}
        </Context.Provider>
    )
}
