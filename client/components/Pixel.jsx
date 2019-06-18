import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: { backgroundColor: this.randomHexColor(), width: '5px', height: '5px' }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: { backgroundColor: this.randomHexColor(), width: '5px', height: '5px' }
    })
  }

  hoverHandler = evt => {
    this.setState({
      style: { backgroundColor: 'green',
        width: '5px',
        height: '5px' }
    })
  }

  contextHandler = evt => {
    this.setState({
      style: { backgroundColor: 'black',
        width: '5px',
        height: '5px' }
    })
  }

  doubleClickHandler = evt => {
    this.setState({
      style: { backgroundColor: 'white',
        width: '5px',
        height: '5px' }
    })
  }

  dragHandler = evt => {
    this.setState({
      style: { backgroundColor: 'yellow',
        width: '5px',
        height: '5px' }
    })
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return (
      <div
        onClick={this.clickHandler}
        onMouseEnter={this.hoverHandler}
        onContextMenu={this.contextHandler}
        onDoubleClick={this.doubleClickHandler}
        onDragEnter={this.dragHandler}

        style={this.state.style}>
      </div>)
  }
}

export default Pixel
