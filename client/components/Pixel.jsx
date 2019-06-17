import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        backgroundColor: this.randomHexColor(),
        height: 66,
        width: 66
      }
    }
  }

randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = evt => {
    const newColor = this.randomHexColor()
    this.setState({
      style: {
        backgroundColor: newColor,
        height: 66,
        width: 66
      }
    })
  }

  render () {
    return (
      <>
      <div onMouseEnter={this.handleClick} style={this.state.style}>
      </div>
      </>
    )
  }
}

export default Pixel
