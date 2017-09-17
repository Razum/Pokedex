import {getPokemonsPerPage} from '../selectrors'

describe('Selectors', () => {
  test('getPokemonsPerPage returns array of pokemons by names', () => {
    const names = ['pokemon1', 'pokemon2', 'pokemon3']
    const pokemons = {
      pokemon1: {
        name: 'pokemon1'
      },
      pokemon2: {
        name: 'pokemon2'
      },
      pokemon3: {
        name: 'pokemon3'
      }
    }

    expect(getPokemonsPerPage(pokemons, names)).toEqual([pokemons.pokemon1, pokemons.pokemon2, pokemons.pokemon3])
  })
  test('getPokemonsPerPage returns empty array if executed without args', () => {
    expect(getPokemonsPerPage({}, [])).toEqual([])
  })
})
