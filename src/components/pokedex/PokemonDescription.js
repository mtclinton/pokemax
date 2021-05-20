import React, { useState, useEffect } from 'react';

function PokemonDescription(props) {

    let description;

    if (props.description) {
        description = props.description;

    } else {
        description = "";
    }

    return <div className="pokemon-description screen">{description}</div>;
}

export default PokemonDescription;
