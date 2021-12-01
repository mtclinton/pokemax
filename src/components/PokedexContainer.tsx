import React, { useContext } from 'react';
import { PokemonContext } from '../hooks/PokemonContext';
import Pokedex from "./pokedex/Pokedex";

import {Pokemon} from "../types";

// Pokemon type just has the name as an attribute
interface cardProp {
    name: string
}
function Card( props: cardProp ) {
    return (
        <div className="Card">
            <div className="img">
                <img src={`https://projectpokemon.org/images/normal-sprite/${props.name}.gif`} alt="" />
            </div>
            <div className="name">
                {props.name}
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
                    return <Card name={pokemon.name} key={i}/>
                })}
            </div>
        </div>
    )
}

export default PokedexContainer;
