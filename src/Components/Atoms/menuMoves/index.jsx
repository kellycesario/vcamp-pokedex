import React from 'react';
import './style.scss';

import underConstruction from '@assets/images/underConstruction.png'

const Moves = () => {
    return (
        <section className="pokeCard__moves">
            <h2 className="pokeCard__title">Moves</h2>
            <p className="pokeCard__underConstructionText">This page is under construction</p>
            <img className="pokeCard__underConstructionImage" src={underConstruction} />
        </section>
    );
}

export default Moves;