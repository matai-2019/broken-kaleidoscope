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


  handleClick = evt => {
    this.setState({
      style: { 
        backgroundColor: '#F4F955',
        height: '120px',
        width: '120px' 
      }
    })
  }

  handleMouseEnter = evt => {
    this.setState({
      style: { 
        backgroundColor: '#378B2E',
        height: '120px',
        width: '120px' 
      }
    })
  }

  handleContextMenu = () => {
    this.setState({
      style: { 
        backgroundColor: '#000000',
        height: '120px',
        width: '120px' 
      }
    })
  }
  
  handleDoubleClick = () => {
    this.setState({
      style: { 
        backgroundColor: '#ffffff',
        height: '120px',
        width: '120px' 
      }
    })
  }

  render () {
    return (
      <div onDoubleClick = {this.handleDoubleClick} onContextMenu={this.handleContextMenu} onClick = {this.handleClick} onMouseEnter = {this.handleMouseEnter} id = 'pixel' style = {this.state.style}></div>
    )
  }
}

export default Pixel
