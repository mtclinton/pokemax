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

    let sprites;
    let names;

    let moves;

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

    if(evoSprites && evoSprites.length) {
        sprites = evoSprites;
    } else {
        sprites = [];
    }

    if(evoNames && evoNames.length) {
        names = evoNames;
    } else {
        names = [];
    }

    if(pokemon && pokemon.length) {
        moves = pokemon[0].moves;
    } else {
        moves = [];
    }

    return (
        <div className="panel right-panel">
            <div className="panel-row">
                <PokemonStats stats={stats} />
                <PokemonType types={types} />
            </div>

            <PokemonEvolution sprites={sprites} names={names} />
            <ButtonChrome />
            <MoveList moves={moves} />

            <PokedexControls />
        </div>
    );
}


export default RightPanel;
