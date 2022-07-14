import React from "react"
import { NavLink } from "react-router-dom";

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