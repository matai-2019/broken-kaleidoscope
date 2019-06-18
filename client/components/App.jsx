import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  render () {
    return Array.from({ length: 100000 }, (v, i) => <Pixel />)
  }
}

export default App
