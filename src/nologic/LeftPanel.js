import React, { useState, useEffect } from 'react';
import PokemonName from "./PokemonName";
import PokemonSprite from "./PokemonSprite";
import PokemonDescription from "./PokemonDescription";


function LeftPanel(props) {

    const {pokemon, description} = props;

    let name;
    let no;

    if (pokemon && pokemon.length) {

        name = pokemon[0].name;
        no = pokemon[0].id;
    } else {
        name = 0;
        no = 0;

    }


    return (
        <div className="panel left-panel">
            <PokemonName name={name} no={no} />
            <PokemonSprite src={name} />
            <PokemonDescription description={description} />
        </div>
    );
}

export default LeftPanel;