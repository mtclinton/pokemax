//
// export interface Pokemon {
//     name: string
// }

// export interface PokedexPokemon {
//
// }

export interface PNProp {
    name: string
    no: number
}

export interface Pokemon {
    abilities?: (Abilities)[] | null;
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves?: (Moves)[] | null;
    name: string;
    order: number;
    past_types?: (null)[] | null;
    species: Species;
    sprites: Sprites;
    stats?: (Stats)[] | null;
    types?: (Types)[] | null;
    weight: number;
}
export interface Abilities {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}
export interface Ability {
    name: string;
    url: string;
}

export interface Moves {
    move: Move;
}

export interface Move {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export interface Stat {
    name: string;
    url: string;
}
export interface Types {
    slot: number;
    type: Type;
}
export interface Type {
    name: string;
    url: string;
}