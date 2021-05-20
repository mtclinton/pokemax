import React, { useState, useEffect } from 'react';
import {PokemonProvider} from "./PokemonContext";
import PokemonsList from "./PokemonsList";
import Pokedex from "./Pokedex";
import PokedexContainer from "./PokedexContainer";



function App() {

    return (
        <PokemonProvider>
            <div className="main">
                <PokemonsList />
                <PokedexContainer />
            </div>

        </PokemonProvider>
    );
}

export default App;
