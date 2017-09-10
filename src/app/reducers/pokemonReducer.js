import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS } from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  items: {}
}

export default function pokemonReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {...state, isFetching: true}
    case FETCH_POKEMONS_SUCCESS:
      const pokemons = {...state, isFetching: false}
      for (let pokemon of action.payload.pokemons) {
        pokemons.items[pokemon.name] = pokemon
      }
      return pokemons
    default:
      return state
  }
}
