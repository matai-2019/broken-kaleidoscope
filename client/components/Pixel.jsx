import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '30px',
        width: '30px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  clickHandler = () => {
    this.setState({
      style: {
        height: '30px',
        width: '30px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  mouseEnterHandler = () => {
    this.setState({
      style: {
        height: '30px',
        width: '30px',
        backgroundColor: 'white'
      }
    })
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return (
      <div onClick={this.clickHandler} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.clickHandler} style={this.state.style}>

      </div>
    )
  }
}

export default Pixel
