import React from 'react'

class Pixel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: this.randomHexColor()
      }
    }
  }
    randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    
    handleColourChange = () => {
      const colour = this.state.style.backgroundColor
      if (colour === 'green') {
        this.setState({
          style:{
            height: '100px',
            width: '100px',
            backgroundColor: this.randomHexColor()
          }
        })
      }else{
        this.setState({
          style:{
            height: '50px',
            width: '50px',
            backgroundColor: 'green'
          }
        })
      }
      
    }
    componentDidMount(){
      setInterval(() => {
        this.setState({
          style:{
            height: '100px',
            width: '100px',
            backgroundColor: this.randomHexColor()
          }
        })
      }, 1000)
    }

    render () {
    return (
      <div style={this.state.style} onMouseEnter={this.handleColourChange}>
      </div>
  )
}
}

export default Pixel