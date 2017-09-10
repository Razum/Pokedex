import React from 'react'
import { shallow } from 'enzyme'
import PokemonList from './'

describe('PokemonList component', () => {
  test('should render "No Pokemons" message in case if there are no pokemons', () => {
    const list = shallow(<PokemonList pokemons={[]} />)
    expect(list.text()).toBe('No Pokemons found. Change filter or reload the page')
    expect(list.find('div').length).toBe(2)
  })

  test('should render list in case if pokemons array is not empty', () => {
    const list = shallow(<PokemonList pokemons={[{name: 'pokemon1', id: 1, sprites: {}}, {name: 'pokemon2', id: 2, sprites: {}}, {name: 'pokemon3', id: 3, sprites: {}}]} />)
    expect(list.find('.flex').children().length).toBe(3)
  })
})
