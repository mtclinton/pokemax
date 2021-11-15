import React, {useState, useEffect, useContext} from 'react';
import Divider from "./Divider";
import LeftPanel from "./left/LeftPanel";
import RightPanel from "./right/RightPanel";
import {PokemonContext} from "../../hooks/PokemonContext";
import axios, {AxiosResponse} from 'axios';

function Pokedex() {

    const { pokedexPokemon } = useContext(PokemonContext);

    const [evoSprites, setEvoSprite] = useState<[]>([]);
    const [evoNames, setEvoNames] = useState<[]>([]);
    const [description, setDescription] = useState("");

    function pickRandom(arr: []) {
        return arr[Math.floor(Math.random() * arr.length)];
    }


    useEffect(() => {
        // async function fetchData() {
        //     let response = await getAllPokemon(initialURL)
        //     await loadPokemon(response.results);
        //     setLoading(false);
        // }
        // fetchData();



        if(pokedexPokemon && pokedexPokemon.length){
            const request = `https://pokeapi.co/api/v2/pokemon-species/${pokedexPokemon[0].id}/`;
            fetch(request, {
                cache: "force-cache"
            })
                .then(response => response.json())
                .then(data => {

                    setDescription(
                        pickRandom(
                            data.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)
                        )
                    )

                    const evo_chain = data.evolution_chain.url;
                    fetch(evo_chain)
                        .then(response => response.json())
                        .then(data => {
                            const api = "https://pokeapi.co/api/v2/pokemon/";
                            const first = data.chain;
                            let second;
                            let third;
                            let evos = [];
                            if (first) {
                                const e1 = fetch(`${api}${first.species.name}/`);
                                evos.push(e1);
                                second = first.evolves_to[0];
                            }
                            if (second) {
                                const e2 = fetch(`${api}${second.species.name}/`);
                                third = second.evolves_to[0];

                                evos.push(e2);
                            }
                            if (third) {
                                const e3 = fetch(`${api}${third.species.name}/`);
                                evos.push(e3);
                            }


                            Promise.all(evos)
                                .then(responses => Promise.all(responses.map(value => value.json())))
                                .then(dataList => {
                                    const sprites = dataList.map(v => v.sprites.front_default);
                                    const names = dataList.map(n => n.name);

                                    setEvoSprite(sprites as [])

                                    setEvoNames(names as []);
                                });
                        });
                });
        }




    }, [pokedexPokemon])

    return (
        <div className="pokedex">
            <LeftPanel
                pokemon={pokedexPokemon}
                description={description}
            />
            <Divider />
            <RightPanel
                pokemon={pokedexPokemon}
                evoSprites={evoSprites}
                evoNames={evoNames}
                // controls={{ next: this.nextPokemon, prev: this.previousPokemon, pick: this.pickPokemon }}
            />
            {/* <TypeList /> */}
        </div>
    );
}

export default Pokedex;



