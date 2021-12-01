import React, { useState, useEffect } from 'react';
import {Types} from "../../../types";

interface typeProp {
    types: []
}

interface typeRenderProp {
    name: string
}

function Type(props: typeRenderProp) {
    return <div className={"type " + props.name}>{props.name}</div>;
}

function PokemonType(props: typeProp) {



    return (
        <div className="type-list">
            <div className="panel-header">Types</div>
            <div className="type-box">
                {props.types.map((t: Types, i) => {
                    return <Type name={t.type.name} key={i} />;
                })}
            </div>
            {/* <div className="panel-header">Evolutions</div> */}
        </div>
    );
}

export default PokemonType;