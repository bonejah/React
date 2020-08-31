'use strict'

import React, { Component } from 'react'
// import Button from './button'
// import Square from './square'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Timer from './timer'
// import Form from './form'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={(e) => {
              this.setState({ checked: !this.state.checked }, () => {
                this.setState({ showContent: this.state.checked })
              })
            }}
          />Show content
        </label>
        {this.state.showContent && <div>I'm here!</div>}
      </div>
    )
  }
}

// class App extends Component
//   render () {
//     return  (
//       <div>
//        <Form / >
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div>
//         <Button handleClick={() => console.log('clicou')}>
//           Clique em mim
//         </Button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     console.log('constructor')
//     super()
//     this.state = {
//       time: 0,
//       showTimer: true
//     }
//   }

//   componentWillMount () {
//     console.log('componentWillMount')
//   }

//   componentDidMount () {
//     console.log('componentDidMount')
//   }

//   componentWillUnmount () {
//     console.log('componentWillUnmount')
//   }

//   render () {
//     console.log('render')
//     return (
//       <div>
//         <Timer time={this.state.time} />
//         <button onClick={() => (
//           this.setState({ time: this.state.time + 10 })
//         )}
//         >Change props
//         </button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     console.log('constructor')
//     super()
//     this.state = {
//       color: 'purple'
//     }
//   }

//   render () {
//     console.log('render')
//     return (
//       <div>
//         <Square color={this.state.color} />
//         {['red', 'purple', 'blue'].map((color) => (
//           <Button
//             key={color}
//             handleClick={() => this.setState({ color })}
//           >
//             {color}
//           </Button>
//         ))}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div className='container'>
//         <LikeButton />
//         <SearchButton />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div className='container'>
//         {['blue', 'red', 'green'].map((square, index) => (
//           <Square key={index} color={square} />
//         ))}
//       </div>
//     )
//   }
// }

// const App = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Title name='Bruno' lastName={{ first: 'Paulo', last: 'Lima' }} />
//       </div>
//     )
//   }
// })

export default App
