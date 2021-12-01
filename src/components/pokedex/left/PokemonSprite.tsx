import React, { useState, useEffect } from 'react';
import SpriteControls from "./SpriteControls";

interface SpriteProp{
    src: string
}

function PokemonSprite(props: SpriteProp){

    let image;

    if (props.src != "") {
        image = <img src={`origin/${props.src}.gif`} alt="pokemon" className="pokemon-sprite" />

    } else {
        image = <img src="https://media1.tenor.com/images/f0fcacd509e39b0a180eccdcfc74ea23/tenor.gif" alt="pokemon" className="pokemon-sprite" />;
    }

    return (
        <div>
            {image}
            <SpriteControls />
        </div>
    );
}

export default PokemonSprite;
