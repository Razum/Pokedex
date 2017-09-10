import { combineReducers } from 'redux'
import pokemonReducer from './pokemon'
import paginationReducer from './pagination'

const PokedexReducer = combineReducers({
  pokemons: pokemonReducer,
  pagination: paginationReducer
})

export default PokedexReducer
