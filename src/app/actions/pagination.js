import {FETCH_POKEMONS, FETCH_POKEMONS_FAIL, GET_PAGE_ITEMS} from '../constants/actionTypes'
import { fetchPokemonsList, fetchPokemonsDetailedList } from './pokemon'
import { take } from 'lodash'

export function goToPage (page = 0) {
  return async (dispatch, getState) => {
    let names = []
    const perPage = 20
    let total = getState().pagination.total
    const paging = getState().pagination
    if (paging.pages[page]) {
      names = [...paging.pages[page]]
    } else {
      dispatch({ type: FETCH_POKEMONS })
      try {
        const response = await fetchPokemonsList(page * perPage)
        names = response.results.map(r => r.name)
        total = response.count
      } catch (e) {
        dispatch({ type: FETCH_POKEMONS_FAIL })
      }
    }
    const pokemons = getState().pokemons.items
    dispatch({
      type: GET_PAGE_ITEMS,
      payload: { page, items: take(names, perPage), total }
    })
    const needRequest = names.filter(n => !pokemons[n])
    dispatch(fetchPokemonsDetailedList(needRequest))
  }
}
