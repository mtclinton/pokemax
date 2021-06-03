import React, { createContext } from 'react';
import { usePokemonReducer } from './usePokemonReducer';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS, SHOW_POKEMON } from './actions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
    const [state, dispatch] = usePokemonReducer();
    const { pokemons, capturedPokemons, pokedexPokemon } = state;

    const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
    const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
    const show = (pokemon) => dispatch({ type: SHOW_POKEMON, pokemon });

    const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
    const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });


    const providerValue = {
        pokemons,
        capturedPokemons,
        pokedexPokemon,
        capture,
        release,
        show,
        addPokemon,
        addPokemons
    };

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
};

export { PokemonContext, PokemonProvider };
