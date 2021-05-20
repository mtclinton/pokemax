// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

const POKEMON = 1;





// class PokemonSpriteAnimated extends React.Component {
//     constructor(props) {
//         super(props);

//         const sprites = Object.keys(props.sprites)
//             .map(sprite => props.sprites[sprite])
//             .filter(url => url);

//         this.state = {
//             sprites: sprites,
//             index: 0
//         };
//     }

//     render() {
//         const index = this.state.index;
//         const sprites = this.state.sprites;
//         setTimeout(() => this.setState({ index: (index + 1) % sprites.length }), 1000);

//         return <PokemonSprite src={sprites[index]} />;
//     }
// }













ReactDOM.render(<Pokedex />, document.getElementById("root"));

// class TypeList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             data: []
//         };
//     }

//     componentDidMount() {
//         this.setState({ loading: true });

//         let request = "https://pokeapi.co/api/v2/type/";

//         fetch(request)
//             .then(response => response.json())
//             .then(data => this.setState({ data: data.results, loading: false }));
//     }

//     render() {
//         return (
//             <div className="type-list">
//                 {this.state.loading ? (
//                     <Loading />
//                 ) : (
//                     this.state.data.map(d => {
//                         return <Type type={d.name} key={d.name} />;
//                     })
//                 )}
//             </div>
//         );
//     }
// }
