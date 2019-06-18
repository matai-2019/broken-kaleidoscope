import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.size = this.props.size
    this.state = {
      style: { backgroundColor: this.randomHexColor(), width: this.size, height: this.size }
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        style: { backgroundColor: this.randomHexColor(),
          width: this.size,
          height: this.size }
      })
    }, 5000)
  }

  clickHandler = evt => {
    this.setState({
      style: { backgroundColor: this.randomHexColor(), width: this.size, height: this.size }
    })
  }

  hoverHandler = evt => {
    this.setState({
      style: { backgroundColor: 'green',
        width: this.size,
        height: this.size }
    })
  }

  contextHandler = evt => {
    this.setState({
      style: { backgroundColor: 'black',
        width: this.size,
        height: this.size }
    })
  }

  doubleClickHandler = evt => {
    this.setState({
      style: { backgroundColor: 'white',
        width: this.size,
        height: this.size }
    })
  }

  dragHandler = evt => {
    this.setState({
      style: { backgroundColor: 'yellow',
        width: this.size,
        height: this.size }
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
