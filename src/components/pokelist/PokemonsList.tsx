import React, { useContext, useState, useEffect } from 'react';
import { PokemonContext } from '../../hooks/PokemonContext';
import {Pokemon} from "../../types";

interface ApiPokemon {
    name: string,
    url: string,
}

interface ApiResult {
    count: number,
    next: string,
    previous: null|string,
    result:[]
}

interface CardProp {
    key: number,
    pokemon: Pokemon,
    onClick: Function
}

function Card(props: CardProp) {
    let { key, pokemon, onClick} = props;
    return (
        <div className="Card">
            <div className="img">
                <img src={`origin/${pokemon.name}.gif`} height={150} width={150} alt="" onClick={onClick(pokemon)} />
            </div>
        </div>
    );
}

const PokemonsList = () => {
    const { pokemons, capture, addPokemons } = useContext(PokemonContext);

    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    function getPokemon(pokemon: ApiPokemon ) {
        return new Promise((resolve, reject) => {
            fetch(pokemon.url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    async function getAllPokemon(url: string) {
        return new Promise<ApiResult>((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL)
            await loadPokemon(response.result);
            setLoading(false);
        }
        fetchData();
    }, [])


    const loadPokemon = async (data: []) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        addPokemons(_pokemonData);
    }

    return (
        <div className="pokemons-list">
            <h2>Pokemons List</h2>

            <div>
                {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
                    <div className="container">
                        {pokemons.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon} onClick={capture}/>
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PokemonsList;
