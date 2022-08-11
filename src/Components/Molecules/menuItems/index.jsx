import React from "react"
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Context } from '@context/context';

import './style.scss'

const MenuRoutes = () => {

    return (
        <>
            <ul className="pokeCard__list">
                <li className="pokeCard__item">
                    <NavLink to='about' className="pokeCard__navigation">
                        About
                    </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='basestats' className="pokeCard__navigation">
                        Base Stats
                    </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='evolution' className="pokeCard__navigation">
                        Evolution
                    </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='moves' className="pokeCard__navigation">
                        Moves
                    </NavLink>
                </li>
            </ul>

            <div className="pokeCard__line"></div>
        </>
    );
}

export default MenuRoutes;