import React, { useState, useEffect } from 'react';

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

function App() {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
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
            setNextUrl(response.next);
            setPrevUrl(response.previous);
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
        <>
            <div>
                {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
                    <>
                        <div className="container">
                            {pokemonData.map((pokemon, i) => {
                                return <Card key={i} pokemon={pokemon} />
                            })}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default App;
