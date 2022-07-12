import React from "react"
import { Route, BrowserRouter, Link } from "react-router-dom"

import style from './style.scss'

import background from '@assets/images/bg-pokeballAndDetail.png'
import Bulba from '@assets/images/bulba.png'
import backgroundItem from '@assets/images/element.png'
import backgroundPokeball from '@assets/images/subtract.png'
import heartImage from '@assets/icons/love.svg'
import leftArrow from '@assets/icons/back.svg'

const ChosenPokeCard = (props) => {
    return (
        <section className="pokeCard">
            
            <div className="pokeCard__objects">
                <button className="pokeCard__button">
                    <img src={leftArrow} className="pokeCard__arrowImage" />
                </button>
                <img src={heartImage} className="pokeCard__heartImage" />
            </div>

            <div className="pokeCard__info">
                <p className="pokeCard__name">{props.name}</p>
                <p className="pokeCard__id">{props.id}</p>
            </div>

            <div className="pokeCard__units">
                <p className="pokeCard__element">{props.element}</p>
                <p className="pokeCard__element">{props.element}</p>
                <p className="pokeCard__type">{props.type}</p>
            </div>

            <div className="pokeCard__images">
                <img className="pokeCard__pokeballBackground" src={backgroundPokeball} />
                <img className="pokeCard__pokemonImage" src={props.pokeImage} /> 
            </div>

            <div className="pokeCard__menu">
                <ul className="pokeCard__list">
                    <li className="pokeCard__item">About</li>
                    <li className="pokeCard__item">Base Stats</li>
                    <li className="pokeCard__item">Evolution</li>
                    <li className="pokeCard__item">Moves</li>
                </ul>
            </div>
        </section>
    )
}

export default ChosenPokeCard;
