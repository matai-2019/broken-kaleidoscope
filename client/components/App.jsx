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
      {this.pixelArray(Math.round(window.innerHeight / 15) * Math.round(window.innerWidth / 15))}
      </>
    )
  }
}

export default App
