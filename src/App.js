import {PokemonProvider} from "./hooks/PokemonContext";
import PokemonsList from "./components/pokelist/PokemonsList";
import PokedexContainer from "./components/PokedexContainer";



function App() {

    return (
        <PokemonProvider>
            <div className="main">
                <PokemonsList />
                <PokedexContainer />
            </div>

        </PokemonProvider>
    );
}

export default App;
