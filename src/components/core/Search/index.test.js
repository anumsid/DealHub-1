import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { SearchDeals } from './index'

describe('Search Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      onClick: onClick,
    }
    wrapper = shallow(<SearchDeals {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Dispatches click when clicked', () => {
    wrapper.find('i').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
