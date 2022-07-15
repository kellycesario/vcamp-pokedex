import React from 'react';
import './style.scss';

import underConstruction from '@assets/images/underConstruction.png'

const BaseStats = () => {
    return (
        <section className="pokeCard__baseStats">
            <h2 className="pokeCard__title">Base Stats</h2>
            <p className="pokeCard__underConstructionText">This page is under construction</p>
            <img className="pokeCard__underConstructionImage" src={underConstruction} />
        </section>
    );
}

export default BaseStats;