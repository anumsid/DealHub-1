import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { Header } from './index'

describe('Header Component', () => {
  let wrapper
  let logout
  beforeEach(() => {
    logout = stub()
    const props = {
      authToken: 'xxx',
      location: { pathname: '' },
      logout: logout,
    }
    wrapper = shallow(<Header {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('logs out user', () => {
    wrapper.find('Link[to="#"]').simulate('click')
    expect(logout.calledOnce).toBe(true)
  })
})
