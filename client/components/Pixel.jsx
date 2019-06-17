import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: { backgroundColor: this.randomHexColor(),
        height: '120px',
        width: '120px' }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return (
      <div id = 'pixel' style = {this.state.style}></div>
    )
  }
}

export default Pixel
