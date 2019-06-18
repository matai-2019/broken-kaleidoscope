import React from 'react'

class Pixel extends React.Component {

  randomHexColor = () =>
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
    if (this.state.style.backgroundColor === 'blue') {
      this.setState({
        style: {
          height: 200,
          width: 200,
          backgroundColor: 'magenta'
        }
      })
    } else {
      this.setState({
        style: {
          height: 200,
          width: 200,
          backgroundColor: this.randomHexColor()
        }
      })
    }
  }

  rightClick = () => {
    this.setState({
      style: {
        height: 200,
        width: 200,
        backgroundColor: 'black'
      }
    })
  }

  doubleClick = () => {
    this.setState({
      style: {
        height: 200,
        width: 200,
        backgroundColor: 'white'
      }
    })
  }

  dragEnter = () => {
    this.setState({
      style: {
        height: 200,
        width: 200,
        backgroundColor: 'yellow'
      }
    })
  }

  componentDidMount () {
    const intervalId = setInterval(() => this.clickHandler(), 100); this.setState({ intervalId })
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  render() {
    return (
      <React.Fragment>
        <div style={this.state.style} onMouseEnter={this.clickHandler} onContextMenu={this.rightClick} onDoubleClick={this.doubleClick} onDragEnter={this.dragEnter}>
        </div>
      </React.Fragment>
    )
  }
}

export default Pixel

