import React, { useState, useEffect } from 'react';
import PokemonStats from "./PokemonStats";
import PokemonType from "./PokemonType";
import PokemonEvolution from "./PokemonEvolution";
import ButtonChrome from "./ButtonChrome";
import MoveList from "./MoveList";
import PokedexControls from "./PokedexControls";
import {Pokemon} from "../../../types";

interface RPProp {
    pokemon: Pokemon|null
    evoSprites: []
    evoNames: []
}



function RightPanel(props: RPProp) {

    const {pokemon, evoSprites, evoNames} = props;

    let stats: [] = [];
    let types: [] = [];

    let sprites: [] = [];
    let names: [] = [];

    let moves: [] = [];

    if(pokemon != null) {
        if (pokemon.stats != null){
            stats = pokemon.stats;
        }
    } else {
        stats = []
    }

    if(pokemon != null) {
        if (pokemon.types != null){
            types = pokemon.types;
        }
    }

    if(evoSprites && evoSprites.length) {
        sprites = evoSprites;
    }

    if(evoNames && evoNames.length) {
        names = evoNames;
    }

    if(pokemon != null) {
        if (pokemon.moves != null){
            moves = pokemon.moves;
        }
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
