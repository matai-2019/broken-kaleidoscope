import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return Array.from({ length: 500 }, () => <Pixel size="25px" />)
}

export default App
