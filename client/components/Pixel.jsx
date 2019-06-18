import React from 'react'

class Pixel extends React.Component {
  constructor(){
    super()
    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  render() {
    return (
      <div style = {this.state.style} onClick = {this.handleClick}></div>
    )
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = evt => {
    this.setState({
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

}

export default Pixel