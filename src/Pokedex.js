import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="name">
                {pokemon.name}
            </div>
        </div>
    );
}

const Pokedex = () => {
    const { capturedPokemons, release } = useContext(PokemonContext);

    return (
        <div className="pokedex">
            <h2>Pokedex</h2>

            <div>
                {capturedPokemons.map((pokemon, i) => {
                    return <Card key={i} pokemon={pokemon} />
                })}
            </div>
        </div>
    )
}

export default Pokedex;
