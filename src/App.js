import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Tables from "./Tables";
import MenuContainer from "./MenuContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuContainer/>
          <div className="main">
            <Route exact path="/" component={Home}/>
            <Route path="/tables" component={Tables}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
