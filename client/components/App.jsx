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
      <>
        {this.pixelArray(100000)}
      </>
    )
  }
}

export default App
