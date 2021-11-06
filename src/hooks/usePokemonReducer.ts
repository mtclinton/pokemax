import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS, SHOW_POKEMON } from './actions';

const getCapturedPokemons = (capturedPokemons: [], releasePokemon: string) =>
    capturedPokemons.filter(pokemon => pokemon !== releasePokemon)

const releasePokemon = (releasePokemon: string, state: PokemonState) => ({
    pokemons: [...state.pokemons, releasePokemon],
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasePokemon)
});

const getPokemonsList = (pokemons: [], capturedPokemon: string) =>
    pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon: string, state: PokemonState) => ({
    pokemons: getPokemonsList(state.pokemons, pokemon),
    capturedPokemons: [...state.capturedPokemons, pokemon],
    pokedexPokemon: [pokemon]
});

const showPokemon = (pokemon: string, state: PokemonState) => ({
    pokemons: state.pokemons, pokemon,
    capturedPokemons: state.capturedPokemons,
    pokedexPokemon: [pokemon]
});

const addPokemon = (pokemon: string, state: PokemonState) => ({
    pokemons: [...state.pokemons, pokemon],
    capturedPokemons: state.capturedPokemons
});

const addPokemons = (pokemons: [], state: PokemonState) => ({
    pokemons: pokemons,
    capturedPokemons: state.capturedPokemons
});

interface PokemonState {
    pokemons: [],
    capturedPokemons: [],
    pokedexPokemon: []
}

interface PokemonAction {
    type: string
    pokemon: string
    pokemons: []
}

const pokemonReducer = (state: PokemonState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case CAPTURE:
            return capturePokemon(action.pokemon, state);
        case RELEASE:
            return releasePokemon(action.pokemon, state);
        case SHOW_POKEMON:
            return showPokemon(action.pokemon, state);
        case ADD_POKEMON:
            return addPokemon(action.pokemon, state);
        case ADD_POKEMONS:
            return addPokemons(action.pokemons, state);
        default:
            return state;
    }
};

export const usePokemonReducer = () =>
    useReducer(pokemonReducer, {
        pokemons: [],
        capturedPokemons: [],
        pokedexPokemon: []
    });
