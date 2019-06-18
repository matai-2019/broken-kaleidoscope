import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        style: {
          backgroundColor: this.randomHexColor(),
          width: 20,
          height: 20
        }
      })
    }, 10000)
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = evt => {
    const newColor = this.randomHexColor()
    this.setState({
      style: {
        backgroundColor: newColor,
        height: 20,
        width: 20
      }
    })
  }

  handleMouseEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'gold',
        height: 20,
        width: 20
      }
    })
  }

  handleDragEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: 20,
        width: 20
      }
    })
  }

  handleContextMenu = evt => {
    evt.preventDefault()
    this.setState({
      style: {
        backgroundColor: 'black',
        height: 20,
        width: 20
      }
    })
  }

  handleDoubleClick = evt => {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: 20,
        width: 20
      }
    })
  }

  render() {
    return (
      <>
        <div style={this.state.style} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onDragEnter={this.handleDragEnter} onContextMenu={this.handleContextMenu} onDoubleClick={this.handleDoubleClick}>
        </div>
      </>
    )
  }
}
export default Pixel
