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

export type getPokemons = {
    results: IPokemon[]
    status: number,
}

export type getPokemonsListByType = {
    pokemon: { pokemon: IPokemon }[]
}

export type setPokemonsType = { type: "SET_POKEMONS", payload: IPokemon[] }
export type setPokemonsTypesType = { type: "SET_POKEMONS_TYPES", payload: IPokemon[] }
export type setPokemonDetailedDataType = { type: "SET_POKEMON_DETAILED_DATA", payload: IPokemonDetailedData }

export type ActionType = setPokemonsType | setPokemonsTypesType | setPokemonDetailedDataType