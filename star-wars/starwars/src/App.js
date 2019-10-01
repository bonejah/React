import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: {}
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/")
      .then(response => response.json())
      .then(links => this.setState({ links: links }));
  }

  render() {
    const { links } = this.state;
    
    console.log(links)
    return (
      <div className="App">
        <h1>STAR WARS</h1>
        { links.array.forEach(element => {
          <a>{element}</a>
        })}
      </div>
    );
  }
}

export default App;
