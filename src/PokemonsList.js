import React, { useContext, useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="name">
                {pokemon.name}
            </div>
        </div>
    );
}

const PokemonsList = () => {
    const { pokemons, capture, addPokemons } = useContext(PokemonContext);

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
        addPokemons(_pokemonData);
    }

    return (
        <div className="pokemons-list">
            <h2>Pokemons List</h2>

            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <th>Pokemon</th>*/}
            {/*        <th>Capture</th>*/}
            {/*    </tr>*/}
            {/*    {listPokemons({*/}
            {/*        pokemons,*/}
            {/*        onClick: capture,*/}
            {/*        buttonLabel: '+'*/}
            {/*    })}*/}
            {/*</table>*/}

            <div>
                {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
                    <div className="container">
                        {pokemons.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon} />
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PokemonsList;
