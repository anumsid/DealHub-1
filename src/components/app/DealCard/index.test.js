import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { DealCard } from './index'

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
      }
    }
    wrapper = shallow(<DealCard {...props} />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
