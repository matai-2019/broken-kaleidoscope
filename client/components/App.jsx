import React from 'react'
import Pixel from './Pixel'

  class App extends React.Component {
    pixelArray (n) {
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push(<Pixel />)
      }
      return arr
    }
  render () {
    return (
      <React.Fragment>
        {this.pixelArray(100)}
      </ React.Fragment>
    )
  }
}

export default App
