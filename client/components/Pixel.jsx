import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '30px',
        width: '30px',
        backgroundColor: '#7575d9'
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
