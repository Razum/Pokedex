import React from 'react'
import { shallow } from 'enzyme'
import Loader from './'

describe('Loader component', () => {
  test('should not render in case isShown === false', () => {
    const loader = shallow(<Loader isShown={false} />)
    return expect(loader.find('div').length).toBe(0)
  })

  test('should render loader in case isShown === true', () => {
    const loader = shallow(<Loader isShown />)
    return expect(loader.find('div').length).toBe(4)
  })
})
