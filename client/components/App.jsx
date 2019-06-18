import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        {this.pixelArray(this.calcGrid())}
      </React.Fragment>
    )
  }

  pixelArray = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
      arr.push(<Pixel key={i} />)
    }
    return arr
  }

  calcGrid = () => {
    return(window.innerWidth/10 * window.innerHeight/10)
  }
}

export default App
