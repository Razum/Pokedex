import React from 'react'
import renderer from 'react-test-renderer'
import Header from './'

describe('Header component', () => {
  test('should match snapshot', () => {
    const tree = renderer.create(
      <Header />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
