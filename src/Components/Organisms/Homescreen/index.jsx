import React, { useContext } from "react";
import CategoryButtons from "@components/organisms/categorybuttons";
import { Context } from "@context/context";
import './style.scss';
import search from "@assets/icons/search.svg";

const Homepage = () => {

    const pokemonContext = useContext(Context);

    return (
        <section className="homepageContainer">
            <div className="homepage">
                <h1 className="homepage__title"> What Pokemon are you looking for? </h1>
                <form className="homepage__form" action="/" 
                onSubmit={(ev) => pokemonContext.handleSubmit(ev, pokemonContext.pokemonSearch)}>
                    <input className="homepage__input" type="text" 
                    placeholder="Search Pokemon, Move, Ability, etc." onChange={pokemonContext.handleChange}/>
                    <button className="homepage__button" type="submit"> <img src={search} /> </button>
                </form>
                <CategoryButtons />    
            </div>
            {/* importar pokemon news*/}        
        </section>
    )

}

export default Homepage; 