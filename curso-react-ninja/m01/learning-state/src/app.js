'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  handleClick () {
    console.log('You clicked')
  }

  render () {
    return (
      <div>
        <Button handleClick={this.handleClick}>
          Clique em mim
        </Button>
      </div>
    )
  }
}

export default App
