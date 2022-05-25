export type IPokemon = {
  name: string,
  url: string
}
export type IPokemonDetailedData = {
  id: number,
  moves: { move: { name: string } }[]
  stats: { stat: { name: string } }[]
}

export interface PokemonsState {
  pokemons: IPokemon[] | [];
  pokemonsTypes: IPokemon[] | [];
  pokemonDetailedData: IPokemonDetailedData | {};
}

const initialState = {
  pokemons: [],
  pokemonsTypes: [],
  pokemonDetailedData: {}
}

export const rootReducer = (state: PokemonsState = initialState, action: any) => {
  switch (action.type) {
    case "SET_POKEMONS": {
      return { ...state, pokemons: action.payload.data }
    }
    case "SET_POKEMONS_TYPES": {
      return { ...state, pokemonsTypes: action.payload.data }
    }
    case "SET_POKEMON_DETAILED_DATA": {
      return { ...state, pokemonDetailedData: action.payload.data }
    }
    default:
      return state
  }
}