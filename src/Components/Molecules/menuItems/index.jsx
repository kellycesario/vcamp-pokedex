import React from "react"
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Context } from '@context/context';

const MenuRoutes = () => {

    const { pokemon } = useContext(Context)
    console.log('menu routes', pokemon)
    return (
        <>
            <ul className="pokeCard__list">
                <li className="pokeCard__item">
                    <NavLink to='about'>
                        About
                    </NavLink>
                </li>
                <li className="pokeCard__item"
                ><NavLink to='basestats'>Base Stats </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='evolution'>Evolution </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='moves'>Moves </NavLink>
                </li>
            </ul>
        </>
    );
}

export default MenuRoutes;