import React from 'react'
import Pixel from './Pixel'

const App = () => {
  var array = Array.from({length: 500}, (v, i) => <Pixel key={i}/>)
  return [
    array
  ]
    
}

export default App
