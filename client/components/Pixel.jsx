import React from 'react'



class Pixel extends React.Component {
  constructor () {
    super()

    this.state = {
      height: 3,
      width: 3,
      backgroundColor: this.randomHexColor()
    }
  }
  randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

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

  handleDragEnter = (evt) => {
    this.setState({
      backgroundColor: 'pink'
    })
  }

  handleContextMenu = (evt) => {
    evt.preventDefault()
    this.setState({
      backgroundColor: 'white'
    })
  }
 


  render () {
    return (
      <div onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onDoubleClick={this.handleDoubleClick} onDragEnter={this.handleDragEnter} onContextMenu={this.handleContextMenu} style={this.state}>
      </div>
    )
  }
}

export default Pixel