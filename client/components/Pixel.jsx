import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: this.randomHexColor()
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
        height: 1,
        width: 1
      }
    })
  }

  handleMouseEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'green',
        height: 1,
        width: 1
      }
    })
  }

  handleDragEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: 1,
        width: 1
      }
    })
  }

  handleContextMenu = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        backgroundColor: 'black',
        height: 1,
        width: 1
      }
    })
  }

  handleDoubleClick = evt => {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: 1,
        width: 1
      }
    })
  }

  render () {
    return (
      <>
        <div style={this.state.style} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onDragEnter={this.handleDragEnter} onContextMenu={this.handleContextMenu} onDoubleClick={this.handleDoubleClick}>
        </div>
      </>
    )
  }
}
export default Pixel
