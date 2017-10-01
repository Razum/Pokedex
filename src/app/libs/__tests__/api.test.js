import { API_URL } from '../../constants/globals'
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
    expect(getEndpoint('pokemon')).toBe(`${API_URL}pokemon`)
  })
  test('getPokemons', async () => {
    moxios.stubRequest(getEndpoint('pokemon'), {
      status: 200,
      response: [{name: 'pokemon1'}, {name: 'pokemon2'}]
    })
    let rep = await getPokemons()
    expect(rep.length).toBe(2)
  })

  test('getPokemon', async () => {
    const pokemonName = 'Pokemon1'
    moxios.stubRequest(getEndpoint(`pokemon/${pokemonName}`), {
      status: 200,
      response: {name: pokemonName}
    })
    const resp = await getPokemon(pokemonName)
    expect(resp.name).toBe(pokemonName)
  })

  test('getPokemonsByType', async () => {
    const type = 'Type1'
    moxios.stubRequest(getEndpoint(`type/${type}`), {
      status: 200,
      response: [{name: 'pokemon1', type}, {name: 'pokemon2', type}]
    })
    const resp = await getPokemonsByType(type)
    expect(resp.length).toBe(2)
    expect(resp[0].type).toBe(type)
  })
})
