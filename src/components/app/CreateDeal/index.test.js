import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { CreateDealForm } from './index'

describe('Create Deal Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      status: null,
      onClick: onClick
    }
    wrapper = shallow(<CreateDealForm {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Handles click on form submit', () => {
    wrapper.find('FormButton').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
