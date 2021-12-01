import React, { useState, useEffect } from 'react';

interface descriptionProp {
    description: string
}

function PokemonDescription(props: descriptionProp) {

    return <div className="pokemon-description screen">{props.description}</div>;
}

export default PokemonDescription;
