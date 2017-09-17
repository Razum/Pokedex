import pokemonReducer from '../pokemon'
import {FETCH_POKEMONS, FETCH_POKEMONS_FAIL, FETCH_POKEMONS_SUCCESS} from '../../constants/actionTypes'

describe('pokemonReducer', () => {
  test('FETCH_POKEMONS', () => {
    const action = {
      type: FETCH_POKEMONS
    }
    const expected = {
      items: {},
      isFetching: true
    }
    expect(pokemonReducer(undefined, action)).toEqual(expected)
  })

  test('FETCH_POKEMONS_FAIL', () => {
    const action = {
      type: FETCH_POKEMONS_FAIL
    }
    const expected = {
      items: {},
      isFetching: false
    }
    expect(pokemonReducer(undefined, action)).toEqual(expected)
  })

  test('FETCH_POKEMONS_SUCCESS', () => {
    const action = {
      type: FETCH_POKEMONS_SUCCESS,
      payload: {pokemons: [{name: 'pokemon1'}, {name: 'pokemon2'}, {name: 'pokemon3'}]}
    }
    const expected = {
      isFetching: false,
      items: {
        'pokemon1': {name: 'pokemon1'},
        'pokemon2': {name: 'pokemon2'},
        'pokemon3': {name: 'pokemon3'}
      }
    }
    expect(pokemonReducer(undefined, action)).toEqual(expected)
  })
})
