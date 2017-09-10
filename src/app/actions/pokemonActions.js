import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS } from '../constants/actionTypes'
import { getPokemons, getPokemon, getPokemonsByType } from '../libs/api'

export async function fetchPokemonsList (offset) {
  const response = await getPokemons({offset})
  return response.data
}

export function fetchPokemonsDetailedList (names) {
  return async (dispatch) => {
    const requestArr = names.map(name => getPokemon(name))
    const details = await Promise.all(requestArr)
    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: {pokemons: details.map(pokemon => pokemon.data)} })
  }
}

export function fetchPokemonsByType (type) {
  return async (dispatch) => {
    dispatch({ type: FETCH_POKEMONS })
    const response = await getPokemonsByType(type)
    const requestArr = response.data.pokemon.map(item => getPokemon(item.pokemon.name))
    const details = await Promise.all(requestArr)
    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: {pokemons: details.map(pokemon => pokemon.data)} })
  }
}
