import React from 'react'

class Pixel extends React.Component {
  constructor(){
    super()
    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'blue'
      }
    }
  }
  render() {
    return (
      <div style = {this.state.style}></div>
    )
  }
}

export default Pixel