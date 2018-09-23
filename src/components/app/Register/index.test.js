import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { SignUp } from './index'

describe('Register Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      errorMessage: null,
      onClick: onClick
    }
    wrapper = shallow(<SignUp {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Handles click on form submit', () => {
    wrapper.find('#name').simulate('change', {target: {value: 'James'}})
    wrapper.find('#age').simulate('change', {target: {value: '32'}})
    wrapper.find('#gender').simulate('change', {target: {innerText: 'Male'}})
    wrapper.find('#city').simulate('change', {target: {value: 'New York'}})
    wrapper.find('#email').simulate('change', {target: {value: 'test@test.com'}})
    wrapper.find('#password').simulate('change', {target: {value: 'password'}})
    wrapper.find('FormButton').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
