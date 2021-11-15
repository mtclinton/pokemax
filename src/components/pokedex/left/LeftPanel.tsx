import React, { useState, useEffect } from 'react';
import PokemonName from "./PokemonName";
import PokemonSprite from "./PokemonSprite";
import PokemonDescription from "./PokemonDescription";
import {PNProp} from "../../../types";

import {Pokemon} from "../../../types";

interface LPProp {
    pokemon: Pokemon
    description: string
}

function LeftPanel(props: LPProp) {

    const {pokemon, description} = props;

    let name: string;
    let no: number;

    if (pokemon) {

        name = pokemon.name;
        no = pokemon.id;
    } else {
        name = "";
        no = 0;

    }


    return (
        <div className="panel left-panel">
            <PokemonName name={name} no={no} />
            <PokemonSprite src={name} />
            <PokemonDescription {...description} />
        </div>
    );
}

export default LeftPanel;