import React from "react"
import { Routes, Route, Router } from "react-router-dom";

import About from '@components/atoms/menuAbout'
import BaseStats from '@components/atoms/menuBaseStats'
import Evolution from '@components/atoms/menuEvolution'
import Moves from '@components/atoms/menuMoves'

const MenuRoutes = () => {
    return(
        <>
            <ul className="pokeCard__list">
                <li className="pokeCard__item">About</li>
                <li className="pokeCard__item">Base Stats</li>
                <li className="pokeCard__item">Evolution</li>
                <li className="pokeCard__item">Moves</li>
            </ul>

        <Routes>
            <Route element={ <About /> } path="/about" />
            <Route element={ <BaseStats /> } path="/basestats" />
            <Route element={ <Evolution /> } path="/evolution" />
            <Route element={ <Moves /> } path="/moves" />
        </Routes>
        </>
    );
}

export default MenuRoutes;