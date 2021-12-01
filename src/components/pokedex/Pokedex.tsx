import React, {useState, useEffect, useContext} from 'react';
import Divider from "./Divider";
import LeftPanel from "./left/LeftPanel";
import RightPanel from "./right/RightPanel";
import {PokemonContext} from "../../hooks/PokemonContext";
import axios, {AxiosResponse} from 'axios';
import {Pokemon} from "../../types";

interface languageProp {
    name: string
}

interface flavorTextProp {
    flavor_text: string
    language: languageProp
}

interface evochainProp {
    url: string
}

interface pokemonSpeciesApiProp {
    flavor_text_entries: flavorTextProp[]
    evolution_chain: evochainProp
}

function Pokedex() {

    const { pokedexPokemon } = useContext(PokemonContext);

    const [evoSprites, setEvoSprite] = useState<[]>([]);
    const [evoNames, setEvoNames] = useState<[]>([]);
    const [description, setDescription] = useState("");

    function pickRandom(arr: string[]) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function pokemonSpecies(pokedexPokemon: Pokemon|null){
        if(pokedexPokemon != null){
            const request = `https://pokeapi.co/api/v2/pokemon-species/${pokedexPokemon.id}/`;
            return new Promise<pokemonSpeciesApiProp>((resolve, reject) => {
                fetch(request).then(res => res.json())
                    .then(data => {
                        resolve(data)
                    })
            });
        }
        return null
    }

    function settingDescription(psap: pokemonSpeciesApiProp|null) {
        if(psap != null){
            let en_text = psap.flavor_text_entries.filter((e:flavorTextProp ) => e.language.name === "en");
            setDescription(

                pickRandom(
                    en_text.map((e: flavorTextProp) => e.flavor_text)
                )
            )
        }
        return null
    }

    function getEvoChain(pokedexPokemon: Pokemon|null, psap: pokemonSpeciesApiProp|null) {
       if(pokedexPokemon!=null && psap != null){
           const evo_chain = psap.evolution_chain.url;
           return new Promise((resolve, reject) => {
               fetch(evo_chain).then(res => res.json())
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
                   })
           });
       }

       return null
    }





    useEffect(() => {

        if(pokedexPokemon != null){




        }

        async function fetchData() {
            let pokemonSpeciesApiData = await pokemonSpecies(pokedexPokemon)
            await settingDescription(pokemonSpeciesApiData)
            await getEvoChain(pokedexPokemon, pokemonSpeciesApiData)
        }
        fetchData();

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



