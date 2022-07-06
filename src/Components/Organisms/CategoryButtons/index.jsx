import React from "react";
import CategoryCard from '@components/molecules/categorycard';

import './style.scss';

import Pokedex from '@assets/images/button1-Pokedex.png';
import Moves from '@assets/images/button2-Moves.png';
import Abilities from '@assets/images/button3-Abilities.png';
import Items from '@assets/images/button4-Items.png';
import Location from '@assets/images/button5-Location.png';
import Type from '@assets/images/button6-Type.png';

export default function CategoryButtons() {
    return (
        <section className="categoryButtonsContainer">
            <ul className="categoryButtons">
                <CategoryCard 
                    image={Pokedex}
                    text= "Pokedex"
                />

                <CategoryCard 
                    image={Moves}
                    text= "Moves"
                />

                <CategoryCard 
                    image={Abilities}
                    text= "Abilities"
                />

                <CategoryCard 
                    image={Items}
                    text= "Items"
                />
                <CategoryCard 
                    image={Location}
                    text= "Location"
                />

                <CategoryCard 
                    image={Type}
                    text= "Type Charts"
                />
            </ul>
        </section>
    )
}