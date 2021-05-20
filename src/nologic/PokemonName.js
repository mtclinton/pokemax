import React, { useState, useEffect } from 'react';

function PokemonName(props) {

    let name;
    let no;

    if (props.name) {
        name = props.name;
    } else {
        name = "Capture a Pokemon";
    }

    if (props.no) {
        no = <span className="name-no">no. {props.no}</span>;
    } else {
        no = <span className="name-no"></span>;
    }
    return (
        <div className="pokemon-name screen">
            {name}
            {no}
        </div>
    );
}

export default PokemonName;
