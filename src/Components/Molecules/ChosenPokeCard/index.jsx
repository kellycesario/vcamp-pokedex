import { useContext } from 'react';
import { Context } from "@context/context";
import { Outlet, useParams } from 'react-router-dom';

import MenuRoutes from '@components/molecules/menuItems'

import backgroundPokeball from '@assets/images/subtract.png'
import heartImage from '@assets/icons/love.svg'
import leftArrow from '@assets/icons/back.svg'
import './style.scss'

import { capitalize, formatId } from './../../../utils/formatData'

const ChosenPokeCard = () => {
    const { pokemonList } = useContext(Context)
    const { pokemonId } = useParams()
    const pokemon = pokemonList.filter(item => item.name === pokemonId)[0] || []
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

                {pokemon.isLoading && pokemon.types.map(item => {
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
                <Outlet />
            </div>
        </section>
    )
}

export default ChosenPokeCard;
