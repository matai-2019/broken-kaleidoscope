import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: { backgroundColor: 'cornflowerblue',
        height: '100px',
        width: '300px' }
    }
  }

  render () {
    return (
      <div id = 'pixel' style = {this.state.style}></div>
    )
  }
}

export default Pixel
