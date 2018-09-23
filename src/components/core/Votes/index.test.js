import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { Votes } from './index'

describe('Votes Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      auth: 'xxx',
      onClick: onClick,
    }
    wrapper = shallow(<Votes {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Dispatches click when clicked', () => {
    wrapper.find('Button').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
