import {GET_PAGE_ITEMS} from '../constants/actionTypes'

const initialState = {
  current: 0,
  perPage: 20,
  total: 0,
  pages: {}
}

export default function paginationReducer (state = initialState, action) {
  switch (action.type) {
    case GET_PAGE_ITEMS:
      return {
        ...state,
        current: action.payload.page,
        total: action.payload.total,
        pages: {
          ...state.pages,
          [action.payload.page]: action.payload.items
        }
      }
    default:
      return state
  }
}
