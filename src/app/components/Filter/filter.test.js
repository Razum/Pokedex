import React from 'react'
import Filter from './'
import renderer from 'react-test-renderer'

describe('Filter component', () => {
  test('should match snapshot', () => {
    const tree = renderer.create(
      <Filter />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
