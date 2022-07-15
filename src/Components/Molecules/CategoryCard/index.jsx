import React from "react";
import { Link } from "react-router-dom";


const CategoryCard = (props) => {
    return (
        <>
            <li className="categoryButtons__item">
                <Link to="Pokedex">
                    <img src={props.image} className="categoryButtons__image" />
                    <p className="categoryButtons__text">{props.text}</p>
                </Link>
            </li>
        </>
    )
}

export default CategoryCard;

