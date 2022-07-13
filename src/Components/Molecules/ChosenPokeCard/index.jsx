import React, { useState, useEffect } from "react"

import style from './style.scss'

import MenuRoutes from '@components/molecules/menuItems'

import background from '@assets/images/bg-pokeballAndDetail.png'
import Bulba from '@assets/images/bulba.png'
import backgroundItem from '@assets/images/element.png'
import backgroundPokeball from '@assets/images/subtract.png'
import heartImage from '@assets/icons/love.svg'
import leftArrow from '@assets/icons/back.svg'

import {fetchPokemon} from '@services/fetchPokemonData'

import { capitalize, formatId } from './../../../utils/formatData'

const ChosenPokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)
    const getpokemonData = async () => {
        const pokemonData = await fetchPokemon('bulbasaur')
        setPokemon(pokemonData)
        setLoading(true)
        }
     //  pokemonData();

    useEffect(() => {
        getpokemonData()
    } , [])

   // console.log(pokemon)
    
    return (
        <section className="pokeCard">
            
            <div className="pokeCard__objects">
                <button className="pokeCard__button">
                    <img src={leftArrow} className="pokeCard__arrowImage" />
                </button>
                <img src={heartImage} className="pokeCard__heartImage" />
            </div>

            <div className="pokeCard__info">
                <p className="pokeCard__name">{capitalize(pokemon.name)}</p>
                <p className="pokeCard__id">{formatId(pokemon.id)}</p>
            </div>

            <div className="pokeCard__units">
    
                {loading && pokemon.types.map(item => { 
                    return (
                        <p className="pokeCard__element"> {item.type.name} </p>
                    )
                
            })}
                <p className="pokeCard__type">{pokemon.type}</p>
            </div>

            <div className="pokeCard__images">
                <img className="pokeCard__pokeballBackground" src={backgroundPokeball} />
                {pokemon.sprites ? (
                                    <img src={pokemon.sprites.other['official-artwork']['front_default'] || ''} />
                                    ) : ( 
                                            null
                                        )
                }
            </div>

            <div className="pokeCard__menu">
                <MenuRoutes />
            </div>
        </section>
    )
}

export default ChosenPokeCard;
