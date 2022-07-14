import React from 'react';
import './style.scss';
import female from '@assets/icons/female.svg'
import male from '@assets/icons/male.svg'

const About = () => {
    return(
        <>
            <p className="pokeCard__aboutText">Bulbasaur can be seen napping in bright sunlight. 
                There is a seed on its back. By soaking up the sun's rays, 
                the seed grows progressively larger. </p>

            <div className="pokeCard__aboutCharacteristics">
                <span className="pokeCard__aboutHeight">Height</span>
                <p className="pokeCard__aboutHeightData">2’3.6” (0.70 cm)</p>

                <span className="pokeCard__aboutWeight">Weight</span>
                <p className="pokeCard__aboutWeightData">15.2 lbs (6.9 kg)</p>
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