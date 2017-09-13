import {SET_POKEMON_PAGING, SET_CATEGORY_PAGING} from '../constants/actionTypes'

const initialState = {
  main: {
    current: 0,
    perPage: 20,
    total: 0,
    pages: {}
  },
  category: {
    perPage: 20
  }
}

export default function paginationReducer (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON_PAGING:
      return {
        ...state,
        main: {
          ...state.main,
          current: action.payload.current,
          total: action.payload.total,
          pages: action.payload.pages
        }
      }
    case SET_CATEGORY_PAGING:
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload.category]: {
            total: action.payload.total,
            pages: action.payload.pages,
            current: action.payload.current
          }
        }
      }
    default:
      return state
  }
}
