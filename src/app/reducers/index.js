import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import paginationReducer from './paginationReducer'

const PokedexReducer = combineReducers({
  pokemons: pokemonReducer,
  pagination: paginationReducer
})

export default PokedexReducer
