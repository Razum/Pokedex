import {getEndpoint, getPokemons, getPokemon, getPokemonsByType} from '../api'
import axios from 'axios'
import moxios from 'moxios'

describe('API', () => {
  beforeEach(function () {
    moxios.install(axios)
  })
  afterEach(function () {
    moxios.uninstall(axios)
  })
  test('getEndpoint', () => {
    expect(getEndpoint('pokemon')).toBe('http://pokeapi.co/api/v2/pokemon')
  })
})
