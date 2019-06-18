import React from 'react'
import {mount} from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

test('<App /> contains <Pixel/>', () => {
  const expected = true
  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(<Pixel/>)
  expect(actual).toBe(expected)
})
