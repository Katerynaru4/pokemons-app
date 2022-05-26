export type IPokemon = {
    name: string,
    url: string
}

export type characteristics = { [value: string]: { name: string } }

export type IPokemonDetailedData = {
    id: number,
    name: string,
    moves: characteristics[]
    stats: characteristics[]
    sprites: {
        front_default: string
    }
}

export interface PokemonsState {
    pokemons: IPokemon[] | [];
    pokemonsTypes: IPokemon[] | [];
    pokemonDetailedData: IPokemonDetailedData;
}
