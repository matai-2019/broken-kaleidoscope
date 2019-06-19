import React from 'react'


class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      height: 50,
      width: 50,
      backgroundColor: randomHexColor()
    }
    const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }
  

  render () {
    return (
      <div style={this.state}>
      </div>
    )
  }
}

export default Pixel