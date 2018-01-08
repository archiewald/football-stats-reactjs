import React, { Component } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><NavLink to="/">Home</NavLink></h2>
        <h2><NavLink to="/tables">Tables</NavLink></h2>
        <h2><a href="#">Fixtures</a></h2>
        <h2><a href="#">Squads</a></h2>
        <h2><a href="#">About</a></h2>
      </div>
    );
  }
}
 
export default Menu;