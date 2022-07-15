import React from 'react';
import './style.scss';

import LittleBulba from '@assets/images/bulbaT.png'
import Ivy from '@assets/images/ivy.png'
import Ven from '@assets/images/ven.png'
import RightArrow from '@assets/icons/arrowRight.svg'

const Evolution = () => {
    return (
        <>
            <h2 className="pokeCard__evolutionChain">Evolution Chain</h2>

            <div className="pokeCard__evolution">
                <img className="pokeCard__pokeImage" src={LittleBulba}/>
                <p className="pokeCard__pokeName"> Bulbasaur</p>

                <img className="pokeCard__arrow" src={RightArrow}/>

                <img className="pokeCard__pokeImage" src={Ivy}/>
                <p className="pokeCard__pokeName">Ivysaur</p>
            </div>

            <hr className="pokeCard__space"/>

            <div className="pokeCard__evolution">
                <img className="pokeCard__pokeImage" src={Ivy}/>
                <p className="pokeCard__pokeName">Ivysaur</p>

                <img className="pokeCard__arrow" src={RightArrow}/>

                <img className="pokeCard__pokeImage" src={Ven}/>
                <p className="pokeCard__pokeName">Venusaur</p>
            </div>
        </>
    );
}

export default Evolution;