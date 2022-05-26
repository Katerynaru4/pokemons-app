export type IPokemon = {
  name: string,
  url: string
}
export type IPokemonDetailedData = {
  id: number,
  name: string,
  moves: { name: string }[]
  stats: { name: string }[]
  sprites: {
    front_default: string
  }
}

export interface PokemonsState {
  pokemons: IPokemon[] | [];
  pokemonsTypes: IPokemon[] | [];
  pokemonDetailedData: IPokemonDetailedData;
}

const initialState = {
  pokemons: [],
  pokemonsTypes: [],
  pokemonDetailedData: {} as IPokemonDetailedData
}

// export const SET_POKEMONS = "SET_POKEMONS";
// export const SET_POKEMONS_TYPES = "SET_POKEMONS_TYPES";
// export const SET_POKEMON_DETAILED_DATA = "SET_POKEMON_DETAILED_DATA";

export const rootReducer = (state: PokemonsState = initialState, action: any) => {
  switch (action.type) {
    case "SET_POKEMONS": {
      return { ...state, pokemons: action.payload }
    }
    case "SET_POKEMONS_TYPES": {
      return { ...state, pokemonsTypes: action.payload }
    }
    case "SET_POKEMON_DETAILED_DATA": {
      return { ...state, pokemonDetailedData: action.payload }
    }
    default:
      return state
  }
}