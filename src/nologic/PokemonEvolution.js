import React, { useState, useEffect } from 'react';


function PokemonEvolution(props) {

    return (
        <div className="panel-row panel-evo">
            <div>
                <div className="flex-center">
                    <div className="evo-num">I</div>
                </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="pokemon"
                     className="pokemon-sprite pokemon-sprite-small" />
                    <div className="screen evo-name">squirtle</div>
                </div>
            <div>
                <div className="flex-center">
                    <div className="evo-num">II</div>
                </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" alt="pokemon"
                     className="pokemon-sprite pokemon-sprite-small" />
                    <div className="screen evo-name">wartortle</div>
                </div>
            <div>
                <div className="flex-center">
                    <div className="evo-num">III</div>
                </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="pokemon"
                     className="pokemon-sprite pokemon-sprite-small" />
                    <div className="screen evo-name">blastoise</div>
                </div>
        </div>
    );
}

export default PokemonEvolution;
