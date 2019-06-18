import React from 'react'

import Pixel from './Pixel'

class App extends React.Component {
  pixelGrid (number) {
    let pixelArr = []
    for (let i = 0; i < number; i++) {
      pixelArr.push(<Pixel key = {i}/>)
    }
    return pixelArr
  }

  render () {
    return (
      <>
        {this.pixelGrid(81)}
      </>
    )
  }
}

export default App
