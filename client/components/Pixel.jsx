import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'black'
      }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor(),
        height: 30,
        width: 30
      }
    })
  }

  onMouseEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'black',
        height: 30,
        width: 30
      }
    })
  }

  setInterval = evt => {
    this.setInterval({
      
    })
  }
  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return <div onClick={this.clickHandler} style={this.state.style} onMouseEnter={this.onMouseEnter} > </div>
  }
}

export default Pixel
