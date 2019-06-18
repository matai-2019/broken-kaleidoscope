import React from 'react'

class Pixel extends React.Component {

  randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  randomSize = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


  constructor() {
    super()

    this.state = {
      style: {
        height: 200,
        width: 200,
        backgroundColor: this.randomHexColor(),
      }
    }
  }

  clickHandler = () => {
    // const newColor = this.state.style.backgroundColor
    this.setState({
      style: {
        height: 200,
        width: 200,
        backgroundColor: this.randomHexColor()
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={ this.state.style } onMouseEnter={ this.clickHandler }>
        </div>
      </React.Fragment>
    )
  }
}

export default Pixel
