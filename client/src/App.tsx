import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    message: ""
  };

  componentDidMount = (): void => {
    fetch("/api/*").then(res => {
      console.log(res);
      return res.json()
    }).then(res => {
      console.log(res);
      this.setState({message: res.msg});
    });
  };

  render() {
    return (
      <div className="App">
        <p>Hello, World!</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
