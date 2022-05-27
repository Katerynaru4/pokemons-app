import axios from 'axios';

import { IPokemon, IPokemonDetailedData, getPokemons, getPokemonsListByType, setPokemonsType, setPokemonsTypesType, setPokemonDetailedDataType } from './types'
import { AppDispatch } from './store'

export const setPokemons = (pokemons: IPokemon[]): setPokemonsType => ({ type: "SET_POKEMONS", payload: pokemons })
export const setPokemonsTypes = (types: IPokemon[]): setPokemonsTypesType => ({ type: "SET_POKEMONS_TYPES", payload: types })
export const setPokemonDetailedData = (data: IPokemonDetailedData): setPokemonDetailedDataType => ({ type: "SET_POKEMON_DETAILED_DATA", payload: data })

export const fetchAndSetPokemons = (searchValue: string, typeUrl: string) => {
  return async (dispatch: AppDispatch) => {
    if (typeUrl) {
      const response = await axios.get<getPokemonsListByType>(typeUrl)
      dispatch(setPokemons(response.data.pokemon.map((item) => item.pokemon).filter((item) => item.name.includes(searchValue))))
    } else {
      const response = await axios.get<getPokemons>("https://pokeapi.co/api/v2/pokemon?limit=300&offset=0")
      dispatch(setPokemons(response.data.results.filter((item: IPokemon) => item.name.includes(searchValue))))
    }
  }
}

export const fetchAndSetPokemonsTypes = () => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<getPokemons>('https://pokeapi.co/api/v2/type')
    dispatch(setPokemonsTypes(response.data.results))
  };
};

export const fetchAndSetPokemonDetailedData = (name: string) => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<IPokemonDetailedData>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    dispatch(setPokemonDetailedData(response.data))
  };
};
