import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { SignIn } from './index'

describe('Login Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      errorMessage: null,
      onClick: onClick
    }
    wrapper = shallow(<SignIn {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Handles click on form submit', () => {
    wrapper.find('FormInput[type="email"]').simulate('change', {target: {value: 'test@test.com', getAttribute: () => 'email'}})
    wrapper.find('FormInput[type="password"]').simulate('change', {target: {value: 'password', getAttribute: () => 'password'}})
    wrapper.find('FormButton').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
