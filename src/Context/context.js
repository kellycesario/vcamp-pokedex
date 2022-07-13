import React, { createContext } from "react";

const initialContextValue = 
    {pokemons: [],
        pokemon: {} 
}
const Context = createContext(initialContextValue);

export default Context; 
