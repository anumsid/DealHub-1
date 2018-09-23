import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { NewDealButton } from './index'

describe('New Deal Button Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      authToken: 'xxx',
      location: { pathname: '' },
      onClick: onClick,
    }
    wrapper = shallow(<NewDealButton {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Dispatches click when clicked', () => {
    wrapper.find('Button').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
