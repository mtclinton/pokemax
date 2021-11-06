import React, { useContext } from 'react';
import { PokemonContext } from '../hooks/PokemonContext';
import Pokedex from "./pokedex/Pokedex";

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="img">
                <img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`}alt="" />
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
                    return <Card key={i} pokemon={pokemon} />
                })}
            </div>
        </div>
    )
}

export default PokedexContainer;