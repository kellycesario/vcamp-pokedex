import React from "react"
import background from '@assets/bg-pokeballAndDetail.png'
import dottedImage from '@assets/dotted.svg'
import heartImage from '@assets/love.svg'
import leftArrow from '@assets/back.svg'
import backgroundWhite from '@assets/bg-about.png'

const PokeCard = (props) => {
    return (
        <section className="pokeCard">
            
            <img src={background} className="pokeCard__backgroundImage" />
            <img src={dottedImage}  className="pokeCard__dottedImage" />
            
            <div className="pokeCard__icons">
                <img src={leftArrow} className="pokeCard__arrowImage" />
                <img src={heartImage} className="pokeCard__heartImage" />
            </div>

            <div className="pokecard__info">
                <p className="pokecard__name">{props.name}</p>
                <p className="pokecard__id">{props.id}</p>
                <p className="pokecard__element">{props.element}</p>
                <p className="pokecard__type">{props.type}</p>
                <img src={props.image} /> 
            </div>

            <div className="pokeCard__menu">
                <img src={backgroundWhite} className="pokeCard__backgroundImage--white" />
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
