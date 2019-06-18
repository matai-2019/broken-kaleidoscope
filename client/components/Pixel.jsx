import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        width: 15,
        height: 15,
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = evt => {
    this.setState({
      style: {
        width: 15,
        height: 15,
        backgroundColor: '#FFFFFF'
      }
    })
  }
  render () {
    return (
      <div onClick={this.handleClick} style={this.state.style}>
      </div >
    )
  }
}

export default Pixel
