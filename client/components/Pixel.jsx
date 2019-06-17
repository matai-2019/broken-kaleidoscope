import React from 'react'
import { generateKeyPair } from 'crypto';

class Pixel extends React.Component {
  render () {
    return (
      <div id = 'pixel' style={{
        backgroundColor: 'cornflowerblue',
        height: '100px',
        width: '300px'
      }}></div>
    )
  }
}

export default Pixel
