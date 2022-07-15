import React, { useContext } from "react";
import CategoryButtons from "@components/organisms/categorybuttons";
import { useRef } from 'react';
import { Context } from "@context/context";
import search from "@assets/icons/search.svg";

import './style.scss';

const Homepage = () => {

    const inputRef = useRef()

    const {
        handleSubmit
    } = useContext(Context);

    return (
        <section className="homepageContainer">
            <div className="homepage">
                <h1 className="homepage__title"> What Pokemon are you looking for? </h1>
                <form
                    className="homepage__form"
                    action="/"
                    onSubmit={(ev) => handleSubmit(ev, inputRef.current.value)}
                >
                    <input
                        className="homepage__input"
                        type="text"
                        placeholder="Search Pokemon, Move, Ability, etc."
                        ref={inputRef}
                    />
                    <button
                        className="homepage__button"
                        type="submit"
                    >
                        <img src={search} />
                    </button>
                </form>
                <CategoryButtons />
            </div>
            {/* importar pokemon news*/}
        </section>
    )

}

export default Homepage; 