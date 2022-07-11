import React from "react"
import style from './style.scss'
import background from '@assets/images/bg-pokeballAndDetail.png'
import heartImage from '@assets/icons/love.svg'
import leftArrow from '@assets/icons/back.svg'
import Bulba from '@assets/images/bulba.png'
import backgroundItem from '@assets/images/element.png'
import backgroundPokeball from '@assets/images/subtract.png'

const PokeCard = (props) => {
    return (
        <section className="pokeCard">
            
            <div className="pokeCard__objects">
                <button className="pokeCard__button">
                    <img src={leftArrow} className="pokeCard__arrowImage" />
                </button>
                <img src={heartImage} className="pokeCard__heartImage" />
            </div>

            <div className="pokeCard__info">
                <p className="pokeCard__name">Bulbasaur</p>
                <p className="pokeCard__id">#001</p>
            </div>

            <div className="pokeCard__units">
                <p className="pokeCard__element">Grass</p>
                <p className="pokeCard__element">Poison</p>
                <p className="pokeCard__type">Seed Pokemon</p>
            </div>

            <div className="pokeCard__images">
                <img className="pokeCard__pokeballBackground" src={backgroundPokeball} />
                <img className="pokeCard__pokemonImage" src={Bulba} /> 
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

export default PokeCard;
