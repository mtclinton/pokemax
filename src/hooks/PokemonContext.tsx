import React, { createContext } from 'react';
import { usePokemonReducer } from './usePokemonReducer';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS, SHOW_POKEMON } from './actions';
import {Pokemon} from "../types";


type Props = {
    children: React.ReactNode;
};

interface ProviderType {
    pokemons: [],
    capturedPokemons: [],
    pokedexPokemon: Pokemon|null,
    capture: Function,
    release: Function,
    show: Function,
    addPokemon: Function,
    // addPokemons: Function
}

const PokemonContext = createContext<ProviderType>({
    pokemons: [],
    capturedPokemons: [],
    pokedexPokemon: null,
    capture: Function,
    release: Function,
    show: Function,
    addPokemon: Function,
    // addPokemons: Function
});

const PokemonProvider = ({ children }: Props) => {
    const [state, dispatch] = usePokemonReducer();
    const { pokemons, capturedPokemons, pokedexPokemon } = state;

    const capture = (pokemon: Pokemon) => () => dispatch({ type: CAPTURE, pokemon: pokemon,pokemons:[] });
    const release = (pokemon: Pokemon) => () => dispatch({ type: RELEASE, pokemon: pokemon,pokemons:[]  });
    const show = (pokemon: Pokemon) => dispatch({ type: SHOW_POKEMON, pokemon: pokemon,pokemons:[]  });

    const addPokemon = (pokemon: Pokemon) => dispatch({ type: ADD_POKEMON, pokemon: pokemon,pokemons:[]  });
    // pass empty pokemon may need to refactor this

    // const addPokemons = (pokemons: []) => dispatch({ type: ADD_POKEMONS, pokemon: null,pokemons:pokemons  });


    const providerValue = {
        pokemons,
        capturedPokemons,
        pokedexPokemon,
        capture,
        release,
        show,
        addPokemon,
        // addPokemons
    };

    return (
        <PokemonContext.Provider value={providerValue}>
            {children}
        </PokemonContext.Provider>
    )
};

export { PokemonContext, PokemonProvider };
