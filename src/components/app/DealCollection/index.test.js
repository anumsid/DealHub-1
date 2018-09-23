import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { DealCollection } from './index'

describe('Deal Collection Component', () => {
  let wrapper
  let handleClick
  beforeEach(() => {
    handleClick = stub()
    const props = {
      handleClick: handleClick,
      deals: [{
        id: 0,
        title: 'Cool Deal',
        votes: ['', ''],
        comments: ['', ''],
        image: '',
        description: 'Hello World',
        location: 'New York',
        category: 'Food & Beverages',
        expiration_date: '2018-07-31T00:00:00.000Z'
      }]
    }
    wrapper = shallow(<DealCollection {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
