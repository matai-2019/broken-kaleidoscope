import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: { backgroundColor: this.randomHexColor(), width: '50px', height: '50px' }
    }
  }

  clickHandler = evt => {
    this.setState({
      style: { backgroundColor: this.randomHexColor(), width: '50px', height: '50px' }
    })
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return (<div onClick={this.clickHandler} style={this.state.style}></div>)
  }
}

export default Pixel
