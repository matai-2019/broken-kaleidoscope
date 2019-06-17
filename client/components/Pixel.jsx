import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '10px',
        width: '10px',
        backgroundColor: 'purple'
      }
    }
  }
  render () {
    return (
      <div style={this.state.style}>
      </div>
    )
  }
}
export default Pixel
