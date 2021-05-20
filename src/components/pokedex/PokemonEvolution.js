import React, { useState, useEffect } from 'react';

function PokeBall(props) {
    return (
        <div className="pokemon-sprite pokemon-sprite-small empty-evo">
            <div className="poke-ball">
                <div className="poke-ball-top" />
                <div className="poke-ball-center">
                    <div className="poke-ball-dot" />
                </div>
                <div className="poke-ball-bottom" />
            </div>
        </div>
    );
}

function PokemonSpriteSmall(props) {
    let evoImage;

    if (props.src) {
        evoImage = <img src={props.src} alt="pokemon" className="pokemon-sprite pokemon-sprite-small" />;
    } else {
        evoImage = <PokeBall />;
    }

    return (
        <div>
            <div className="flex-center">
                <div className="evo-num">{props.evo}</div>
            </div>
            {evoImage}
            <div className="screen evo-name">{props.name || "No Data"}</div>
        </div>
    );
}

function PokemonEvolution(props) {

    const {sprites, names} = props;
    let e1 = "";
    let e2 = "";
    let e3 = "";

    let n1 = "";
    let n2 = "";
    let n3 = "";

    if(sprites && sprites.length) {
        e1 = sprites[0];
        e2 = sprites[1];
        e3 = sprites[2];
    }

    if(names && names.length) {
        n1 = names[0];
        n2 = names[1];
        n3 = names[2];
    }

    return (
        <div className="panel-row panel-evo">
            {/* <div className="panel-header evo-header">Evolutions</div> */}
            <PokemonSpriteSmall src={e1} evo="I" name={n1} />
            <PokemonSpriteSmall src={e2} evo="II" name={n2} />
            <PokemonSpriteSmall src={e3} evo="III" name={n3} />
        </div>
    );
}

export default PokemonEvolution;
