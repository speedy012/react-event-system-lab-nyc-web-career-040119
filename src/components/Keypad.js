// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  //helper function
  onKeyUp = () => {
    console.log('Entering password...')
  }
  render(){
    return(
      <input type="password" onKeyUp={this.onKeyUp}/>
    )
  }
}

export default Keypad
