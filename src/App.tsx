import {PokemonProvider} from "./hooks/PokemonContext";
import PokemonsList from "./components/pokelist/PokemonsList";
import PokedexContainer from "./components/PokedexContainer";
import React from "react";

function App() {

    return (
        <PokemonProvider>
            <div className="main">
                <PokemonsList />
                {/*<PokedexContainer />*/}
            </div>

        </PokemonProvider>
    );
}

export default App;
