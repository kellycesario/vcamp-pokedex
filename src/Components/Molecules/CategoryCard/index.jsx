import React from "react";

const CategoryCard = (props) => {
    return (
        <li className="categoryButtons__item">
            <a>
                <img src={props.image} className="categoryButtons__image" />
                <p className="categoryButtons__text">{props.text}</p>
            </a>
        </li>
    )
}

export default CategoryCard;