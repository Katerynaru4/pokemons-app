import { IPokemon, IPokemonDetailedData } from './reducer'

export type setPokemonsType = { type: "SET_POKEMONS", payload: IPokemon[] }
export type setPokemonsTypesType = { type: "SET_POKEMONS_TYPES", payload: IPokemon[] }
export type setPokemonDetailedDataType = { type: "SET_POKEMON_DETAILED_DATA", payload: IPokemonDetailedData }

export const setPokemons = (pokemons: IPokemon[]): setPokemonsType => ({ type: "SET_POKEMONS", payload: pokemons })
export const setPokemonsTypes = (types: IPokemon[]): setPokemonsTypesType => ({ type: "SET_POKEMONS_TYPES", payload: types })
export const setPokemonDetailedData = (data: IPokemonDetailedData): setPokemonDetailedDataType => ({ type: "SET_POKEMON_DETAILED_DATA", payload: data })

export const fetchAndSetPokemons = (searchValue: string, typeUrl: string) => {
  return (dispatch: any) => {
    if (typeUrl) {
      fetch(typeUrl)
        .then(response => response.json())
        .then(data => dispatch(setPokemons(data.pokemon.map((item: any) => item.pokemon).filter((item: any) => item.name.includes(searchValue)))))
    } else {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=300&offset=0")
        .then(response => response.json())
        .then(data => dispatch(setPokemons(data.results.filter((item: any) => item.name.includes(searchValue)))))
    }
  }
}

export const fetchAndSetPokemonsTypes = () => {
  return (dispatch: any) => {
    fetch("https://pokeapi.co/api/v2/type")
      .then(response => response.json())
      .then(data => dispatch(setPokemonsTypes(data.results)))
  };
};

export const fetchAndSetPokemonDetailedData = (name: string) => {
  return (dispatch: any) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(setPokemonDetailedData(data))
      }
      )
  };
};
