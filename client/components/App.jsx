import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  PixelArray (n) {
    let arr = []
    for (let i = 0; i < n; i++) {
      arr.push(<Pixel />)
    }
    return arr
  }

  render () {
    return (
      <>
       {this.PixelArray(1000)}
      </>
    )
  }
}

export default App
