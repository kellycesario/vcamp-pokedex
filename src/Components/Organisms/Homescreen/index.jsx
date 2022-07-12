import React from "react";
import CategoryButtons from "@components/organisms/categorybuttons";
import './style.scss';
import search from "@assets/icons/search.svg";

const Homepage = () => {

    return (
        <section className="homepageContainer">
            <div className="homepage">
                <h1 className="homepage__title"> What Pokemon are you looking for? </h1>
                <form className="homepage__form" action="/">
                    <input className="homepage__input" type="text" placeholder="Search Pokemon, Move, Ability, etc." />
                    <button className="homepage__button"> <img src={search} /> </button>
                </form>
                <CategoryButtons />    
            </div>
            {/* importar pokemon news*/}        
        </section>
    )

}

export default Homepage; 