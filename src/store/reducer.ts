import {
  IPokemonDetailedData,
  PokemonsState,
} from './types';

const initialState = {
  pokemons: [],
  pokemonsTypes: [],
  pokemonDetailedData: {} as IPokemonDetailedData
}

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