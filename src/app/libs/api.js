import axios from 'axios'
import path from 'path'
import url from 'url'

const API_URL = 'http://pokeapi.co/api/'
const API_VERSION = 'v2'

/**
 * Form an API endpoint URL
 * @param  {String} endpoint The path of the call
 * @return {String} Properly formed URL
 */
export function getEndpoint (endpoint = '') {
  return url.resolve(API_URL, path.join(API_VERSION, endpoint))
}

/**
 * Get Pokemons
 * @param {Object} params
 * @param {number} params.offset Offset of results to start returning from
 * @return {Promise}
 */
export function getPokemons (params) {
  return axios.get(getEndpoint('pokemon'), {params}).then(response => response.data)
}

/**
 * Get Pokemon info
 * @param {string} name pokemon name
 * @return {Promise}
 */
export function getPokemon (name) {
  return axios.get(getEndpoint(`pokemon/${name}`)).then(response => response.data)
}

/**
 * Get Pokemons by Type
 * @param {string} type pokemon type
 * @return {Promise}
 */
export function getPokemonsByType (type) {
  return axios.get(getEndpoint(`type/${type}`)).then(response => response.data)
}
