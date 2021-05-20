import React, { useState, useEffect } from 'react';

function Type(props) {
    return <div className={"type " + props.type}>{props.type}</div>;
}

function PokemonType(props) {

    let types;

    if (props.types) {
        types = props.types;
    } else {
        types = [];
    }

    return (
        <div className="type-list">
            <div className="panel-header">Types</div>
            <div className="type-box">
                {types.map(t => {
                    const type = t.type.name;
                    return <Type type={type} key={type} />;
                })}
            </div>
            {/* <div className="panel-header">Evolutions</div> */}
        </div>
    );
}

export default PokemonType;