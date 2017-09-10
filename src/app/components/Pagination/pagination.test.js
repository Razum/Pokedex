import React from 'react'
import { shallow } from 'enzyme'
import Pagination from './'

describe('Pagination component', () => {
  test('should not render in case total is false', () => {
    const paging = shallow(<Pagination total={0} />)
    return expect(paging.children().length).toBe(0)
  })
})
