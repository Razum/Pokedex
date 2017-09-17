import PokedexReducer from '../index'
import pokemonReducer from '../pokemon'
import paginationReducer from '../pagination'
import { createStore } from 'redux'

describe('PokedexReducer', () => {
  let store = createStore(PokedexReducer)
  test('state.pokemons should be equal pokemon initial state', () => {
    expect(store.getState().pokemons).toEqual(pokemonReducer(undefined, {}))
  })
  test('state.pagination should be equal pagination initial state', () => {
    expect(store.getState().pagination).toEqual(paginationReducer(undefined, {}))
  })
})
