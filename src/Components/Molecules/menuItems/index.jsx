import React from "react"
import { NavLink } from "react-router-dom";

import About from '@components/atoms/menuAbout'
import BaseStats from '@components/atoms/menuBaseStats'
import Evolution from '@components/atoms/menuEvolution'
import Moves from '@components/atoms/menuMoves'

const MenuRoutes = () => {
    return (
        <>
            <ul className="pokeCard__list">
                <li className="pokeCard__item">
                    <NavLink to='about'>
                        About
                    </NavLink>
                </li>
                <li className="pokeCard__item"
                ><NavLink to='about'>Base Stats </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='about'>Evolution </NavLink>
                </li>
                <li className="pokeCard__item">
                    <NavLink to='about'>Moves </NavLink>
                </li>
            </ul>



        </>
    );
}

export default MenuRoutes;