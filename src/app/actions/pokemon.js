import { FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAIL, SET_POKEMON_PAGING, FETCH_POKEMONS, SET_CATEGORY_PAGING } from '../constants/actionTypes'
import { getPokemons, getPokemon, getPokemonsByType } from '../libs/api'
import {take, chunk} from 'lodash'

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

export function fetchPokemons (page = 0) {
  return async (dispatch, getState) => {
    let total = getState().pagination.main.total
    let perPage = getState().pagination.main.perPage
    let pages = getState().pagination.main.pages
    const pokemonsDB = getState().pokemons.items
    dispatch({ type: FETCH_POKEMONS })
    if (!total) {
      let response = await fetchPokemonsList()
      total = response.count
      pages[0] = take(response.results.map(p => p.name), perPage)
    }

    if (!pages[page]) {
      let userOffset = perPage * page
      let offset = total < userOffset ? total - perPage : userOffset
      let response = await fetchPokemonsList(offset)
      pages[page] = take(response.results.map(p => p.name), perPage)
    }
    const names = pages[page].filter(p => !pokemonsDB[p])
    dispatch(fetchPokemonsDetailedList(names))
    dispatch({ type: SET_POKEMON_PAGING, payload: {pages, total, current: page} })
  }
}

export function fetchCategoryPokemons (page = 0, category) {
  return async (dispatch, getState) => {
    let {total, pages} = getState().pagination.category[category] || {}
    let perPage = getState().pagination.category.perPage
    let pokemons = []
    const pokemonsDB = getState().pokemons.items
    dispatch({ type: FETCH_POKEMONS })
    if (!total || !pages) {
      let response = await getPokemonsByType(category)
      pokemons = response.pokemon.map(p => p.pokemon.name)
      total = pokemons.length
      pages = chunk(pokemons, perPage)
    }
    const names = pages[page].filter(p => !pokemonsDB[p])
    dispatch(fetchPokemonsDetailedList(names))
    dispatch({ type: SET_CATEGORY_PAGING, payload: {category, pages, total, current: page} })
  }
}
