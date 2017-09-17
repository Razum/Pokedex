import paginationReducer from '../pagination'
import {SET_POKEMON_PAGING, SET_CATEGORY_PAGING} from '../../constants/actionTypes'

describe('paginationReducer', () => {
  test('SET_POKEMON_PAGING', () => {
    const action = {
      type: SET_POKEMON_PAGING,
      payload: {
        current: 0,
        total: 50,
        pages: {
          0: ['pokemon1', 'pokemon2', 'pokemon3']
        }
      }
    }
    const expected = {
      main: {
        current: 0,
        total: 50,
        perPage: 20,
        pages: {
          0: ['pokemon1', 'pokemon2', 'pokemon3']
        }
      },
      category: {
        perPage: 20
      }
    }
    expect(paginationReducer(undefined, action)).toEqual(expected)
  })

  test('SET_POKEMON_PAGING', () => {
    const action = {
      type: SET_CATEGORY_PAGING,
      payload: {
        category: 'grass',
        current: 0,
        total: 50,
        pages: {
          0: ['pokemon1', 'pokemon2', 'pokemon3']
        }
      }
    }

    const expected = {
      main: {
        current: 0,
        perPage: 20,
        total: 0,
        pages: {}
      },
      category: {
        perPage: 20,
        'grass': {
          current: 0,
          total: 50,
          pages: {
            0: ['pokemon1', 'pokemon2', 'pokemon3']
          }
        }
      }
    }

    expect(paginationReducer(undefined, action)).toEqual(expected)
  })
})
