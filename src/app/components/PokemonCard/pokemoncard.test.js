import React from 'react'
import { shallow } from 'enzyme'
import PokemonCard from './'

describe('PokemonCard component', () => {
  test('should throw Error in case sprites = null', () => {
    expect(() => shallow(<PokemonCard />)).toThrow(TypeError)
  })
})
