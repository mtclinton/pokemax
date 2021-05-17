import React, { useState, useEffect } from 'react';
import {PokemonProvider} from "./PokemonContext";
import PokemonsList from "./PokemonsList";
import Pokedex from "./Pokedex";



function App() {
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    function getPokemon({ url }) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    async function getAllPokemon(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL)
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, [])


    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData);
    }

    return (
        <PokemonProvider>
            <div className="main">
                <PokemonsList />
                <Pokedex />
            </div>

        </PokemonProvider>
    );
}

export default App;
