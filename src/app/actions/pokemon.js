import { FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAIL } from '../constants/actionTypes'
import { getPokemons, getPokemon } from '../libs/api'

export async function fetchPokemonsList (offset) {
  const response = await getPokemons({offset})
  return response.data
}

export function fetchPokemonsDetailedList (names) {
  return async (dispatch) => {
    const requestArr = names.map(name => getPokemon(name))
    try {
      const details = await Promise.all(requestArr)
      dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: {pokemons: details.map(pokemon => pokemon.data)} })
    } catch (e) {
      dispatch({ type: FETCH_POKEMONS_FAIL })
    }
  }
}
