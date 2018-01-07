import React, { Component } from 'react';
import './App.css';
import MenuContainer from "./MenuContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuContainer/>
        <div className="main">
          <p>
            Welcome to football stats. Search through the menu to get the latest football stats.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
