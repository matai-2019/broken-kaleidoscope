import React from 'react'



class Pixel extends React.Component {
  constructor () {
    super()
    const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = {
      height: 50,
      width: 50,
      backgroundColor: randomHexColor()
    }
  }

  handleClick = (evt) => {
    this.setState({
      backgroundColor: 'black'
    })
  }

  handleMouseEnter = (evt) => {
    this.setState({
      backgroundColor: 'yellow'
    })
  }

  handleDoubleClick = (evt) => {
    this.setState({
      backgroundColor: 'green'
    })
  }



  render () {
    return (
      <div onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onDoubleClick={this.handleDoubleClick} style={this.state}>
      </div>
    )
  }
}

export default Pixel