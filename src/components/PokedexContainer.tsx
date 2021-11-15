import React, { useContext } from 'react';
import { PokemonContext } from '../hooks/PokemonContext';
import Pokedex from "./pokedex/Pokedex";

import {Pokemon} from "../types";

// Pokemon type just has the name as an attribute

function Card( name: string ) {
    return (
        <div className="Card">
            <div className="img">
                <img src={`https://projectpokemon.org/images/normal-sprite/${name}.gif`} alt="" />
            </div>
            <div className="name">
                {name}
            </div>
        </div>
    );
}

const PokedexContainer = () => {
    const { capturedPokemons, release } = useContext(PokemonContext);

    return (
        <div className="pokedex-container">
            <h2>Pokedex</h2>

            <Pokedex />


            <div className="captured-container">
                {capturedPokemons.map((pokemon: Pokemon, i) => {
                    return <Card {...pokemon.name}/>
                })}
            </div>
        </div>
    )
}

export default PokedexContainer;
