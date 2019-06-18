import React from 'react'
import { mount } from 'enzyme'

import Pixel from '../client/components/Pixel'

test('<Pixel /> has a div tag', () => {
  const expected = true
  const wrapper = mount(<Pixel />)

  const actual = wrapper.containsMatchingElement(div)

  expected(actual).toBe(expected)
})
