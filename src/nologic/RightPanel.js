import React, { useState, useEffect } from 'react';
import PokemonStats from "./PokemonStats";
import PokemonType from "./PokemonType";
import PokemonEvolution from "./PokemonEvolution";
import ButtonChrome from "./ButtonChrome";
import MoveList from "./MoveList";
import PokedexControls from "./PokedexControls";


function RightPanel(props) {

    const {pokemon, evoSprites, evoNames} = props;

    let stats;
    let types;

    if(pokemon && pokemon.length) {
        stats = pokemon[0].stats;
    } else {
        stats = "";
    }

    if(pokemon && pokemon.length) {
        types = pokemon[0].types;
    } else {
        types = "";
    }

    return (
        <div className="panel right-panel">
            <div className="panel-row">
                <PokemonStats stats={stats} />
                <PokemonType types={types} />
            </div>

            <PokemonEvolution />
            <ButtonChrome />
            <MoveList />
            <PokedexControls />
        </div>
    );
}


export default RightPanel;
