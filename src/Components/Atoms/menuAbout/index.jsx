import React from 'react';

import { useContext } from 'react';
import { Context } from '@context/context';

import { formatMeasure, formatWeightToPounds, formatHeightToInches } from '@utils/formatData';

import female from '@assets/icons/female.svg'
import male from '@assets/icons/male.svg'

import './style.scss';

const About = () => {
    const {
        pokemon,
        pokemonDescription,
        pokemonGender
    } = useContext(Context)

    const { height, weight } = pokemon

    const englishDescription = pokemonDescription['flavor_text_entries'].filter(text => text.language.name === 'en')
    const randomDescription = englishDescription[Math.floor(Math.random() * englishDescription.length)]['flavor_text']

    console.log(pokemonGender)
    return (
        <>
            <p className="pokeCard__aboutText">{randomDescription}</p>

            <div className="pokeCard__aboutCharacteristics">
                <span className="pokeCard__aboutHeight">Height</span>
                <p className="pokeCard__aboutHeightData">{`${formatHeightToInches(formatMeasure(height))} inches ${formatMeasure(height)} cm`}</p>

                <span className="pokeCard__aboutWeight">Weight</span>
                <p className="pokeCard__aboutWeightData">{`${formatWeightToPounds(formatMeasure(weight))} lbs ${formatMeasure(weight)} Kg`}</p>
            </div>

            <div className="pokeCard__aboutBreeding">
                <p className="pokeCard__aboutBreedingTitle">Breeding</p>
                <span className="pokeCard__aboutGender">Gender</span>
                <p className="pokeCard__aboutMale"> <img src={male} /> 87.5% </p>
                <p className="pokeCard__aboutFemale"> <img src={female} /> 12.5% </p>

                <span className="pokeCard__aboutEggGroups">Egg Groups</span>
                <p className="pokeCard__aboutGroup">Monster</p>

                <span className="pokeCard__aboutEggCycles">Egg Cycle</span>
                <p className="pokeCard__aboutCycle">Grass</p>
            </div>
        </>
    );
}

export default About;