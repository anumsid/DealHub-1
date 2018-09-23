import React from 'react'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import toJson from 'enzyme-to-json'
import { Footer } from './index'

describe('Footer Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
