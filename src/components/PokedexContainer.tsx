import React, { useContext } from 'react';
import { PokemonContext } from '../hooks/PokemonContext';
import Pokedex from "./pokedex/Pokedex";

import {Pokemon} from "../types";

// Pokemon type just has the name as an attribute

function Card( pokemon: Pokemon ) {
    return (
        <div className="Card">
            <div className="img">
                <img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`} alt="" />
            </div>
            <div className="name">
                {pokemon.name}
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
                {capturedPokemons.map((pokemon, i) => {
                    return <Card  name={pokemon}/>
                })}
            </div>
        </div>
    )
}

export default PokedexContainer;
