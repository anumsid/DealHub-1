import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { DealCardDetails } from './index'

describe('Deal Card Component', () => {
  let wrapper
  let onClick
  beforeEach(() => {
    onClick = stub()
    const props = {
      card: {
        id: 0,
        title: 'Cool Deal',
        votes: ['', ''],
        comments: ['', ''],
        image: '',
        description: 'Hello World',
        location: 'New York',
        category: 'Food & Beverages',
        expiration_date: '2018-07-31T00:00:00.000Z'
      },
      users: []
    }
    wrapper = shallow(<DealCardDetails {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})