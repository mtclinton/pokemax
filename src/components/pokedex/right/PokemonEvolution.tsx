import React, { useState, useEffect } from 'react';
import {Types} from "../../../types";

function PokeBall() {
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

function PokemonSpriteSmall(props: pokemonSpriteSmallProp) {
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

interface evoProp {
    sprites: []
    names: []
}

interface pokemonSpriteSmallProp {
    src: string
    name: string
    evo: string
}

export class EvoPokemon {
    public name: string;
    public sprite: string;
    public evo: string
    constructor(name:string, sprite:string, evo:string) {
        this.name = name;
        this.sprite = sprite;
        this.evo = evo;
    }
}

function PokemonEvolution(props: evoProp) {

    const {sprites, names} = props;

    let evo_array: EvoPokemon[] = []

    {props.sprites.map((sprite: string, i: number) => {
        props.names.map((name: string, j: number) => {
            if(i==j){
                let evo = ""
                if(i == 0){
                    evo = "I"
                }
                if(i == 1){
                    evo = "II"
                } else {
                    evo = "II"
                }

                let evoPokemon = {name:name, sprite:sprite, evo:evo};

                evo_array.push(evoPokemon);

            }
        })
    })}


    return (
        <div className="panel-row panel-evo">
            {/* <div className="panel-header evo-header">Evolutions</div> */}
            {evo_array.map((evop:EvoPokemon) => {
                return <PokemonSpriteSmall src={evop.sprite} evo={evop.evo} name={evop.name} />
            })}
        </div>
    );
}

export default PokemonEvolution;
