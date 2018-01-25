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
  constructor (props,context) {
    super(props, context);
    this.state = {
      selectedLeague:''
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(selectedLeague){this.setState({selectedLeague: selectedLeague})};
  
  render() {
    return (
      <Router>
        <div className="App">
          <MenuContainer update={this.updateState} />
          <div className="main">
            <Route exact path="/" component={Home}/>
            {/* <Route path="/tables" component={Tables}/> */}
            <Route path="/tables" render={() => <Tables selectedLeague={this.state.selectedLeague}/>}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
