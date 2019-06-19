import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return (
 <React.Fragment>
   {Array.from({length: 120000}, (v, i) => <Pixel key={i} />)}
 </React.Fragment>
  )
}

export default App
