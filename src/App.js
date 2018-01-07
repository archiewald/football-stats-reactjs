import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="menu-header">
          <h1>football-stats</h1>
        </header>
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
