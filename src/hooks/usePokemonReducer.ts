import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS, SHOW_POKEMON } from './actions';
import PokemonStats from "../components/pokedex/right/PokemonStats";
import {Pokemon} from "../types";

const getCapturedPokemons = (capturedPokemons: [], releasePokemon: Pokemon) =>
    capturedPokemons.filter(pokemon => pokemon !== releasePokemon)

const releasePokemon = (releasePokemon: Pokemon, state: PokemonState) => ({
    pokemons: [...state.pokemons, releasePokemon],
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasePokemon)
});

const getPokemonsList = (pokemons: [], capturedPokemon: Pokemon) =>
    pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon: Pokemon, state: PokemonState) => ({
    pokemons: getPokemonsList(state.pokemons, pokemon),
    capturedPokemons: [...state.capturedPokemons, pokemon],
    pokedexPokemon: pokemon
});

const showPokemon = (pokemon: Pokemon, state: PokemonState) => ({
    pokemons: state.pokemons,   /// don't change the pokemons state just changing which pokemon is shown on pokedex
    capturedPokemons: state.capturedPokemons,
    pokedexPokemon: pokemon
});

const addPokemon = (pokemon: Pokemon, state: PokemonState) => ({
    pokemons: [...state.pokemons, pokemon],
    capturedPokemons: state.capturedPokemons
});

// const addPokemons = (pokemons: [], state: PokemonState) => ({
//     pokemons: pokemons,
//     capturedPokemons: state.capturedPokemons
// });

interface PokemonState {
    pokemons: [],
    capturedPokemons: [],
    pokedexPokemon: Pokemon|null
}

interface PokemonAction {
    type: string
    pokemon: Pokemon
    pokemons: []
}

const pokemonReducer = (state: PokemonState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case CAPTURE:
            return capturePokemon(action.pokemon, state) as PokemonState;
        case RELEASE:
            return releasePokemon(action.pokemon, state) as PokemonState;
        case SHOW_POKEMON:
            return showPokemon(action.pokemon, state) as PokemonState;
        case ADD_POKEMON:
            return addPokemon(action.pokemon, state) as PokemonState;
        // case ADD_POKEMONS:
        //     return addPokemons(action.pokemons, state) as PokemonState;
        default:
            return state;
    }
};

export const usePokemonReducer = () =>
    useReducer(pokemonReducer, {
        pokemons: [],
        capturedPokemons: [],
        pokedexPokemon: null
    });
