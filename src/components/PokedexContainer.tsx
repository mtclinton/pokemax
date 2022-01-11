import React, { useContext } from 'react';
import { PokemonContext } from '../hooks/PokemonContext';
import Pokedex from "./pokedex/Pokedex";

import {Pokemon} from "../types";

interface CardProp {
    pokemon: Pokemon,
    onClick: Function
}

function Card(props: CardProp) {
    let {  pokemon, onClick} = props;
    return (
        <div className="Card">
            <div className="img">
                <img src={`https://projectpokemon.org/images/normal-sprite/${props.pokemon.name}.gif`} height={50} width={50} alt="" onClick={onClick(pokemon)} />
            </div>
            <div className="name">
                {props.pokemon.name}
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
                    return <Card pokemon={pokemon} onClick={release} key={i}/>
                })}
            </div>
        </div>
    )
}

export default PokedexContainer;
