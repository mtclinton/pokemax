import React, { useState, useEffect } from 'react';

function PokemonDescription(description: string) {


    if (description) {

    } else {
        description = "";
    }

    return <div className="pokemon-description screen">{description}</div>;
}

export default PokemonDescription;
