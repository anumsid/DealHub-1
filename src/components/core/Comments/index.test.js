import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { Comments } from './index'

describe('Comments Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      authToken: 'xxx',
      onClick: onClick,
      comments: [{
        content: 'hello world',
        user_id: 1,
        id: 2
      },
      {
        content: 'this is cool!',
        user_id: 1,
        id: 3
      }],
      users: [{
        id: 1,
        name: 'joe blow'
      }]
    }
    wrapper = shallow(<Comments {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Handles click on form submit', () => {
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(onClick.calledOnce).toBe(true)
  })
})
