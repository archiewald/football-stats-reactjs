import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onClick={this.props.handleClick} 
           className={visibility}>
        <h2><Link to='/'>Home</Link></h2>
        <h2><Link to='/tables'>Tables</Link></h2>
        {/* <h2><a href="#">Fixtures</a></h2>
        <h2><a href="#">Squads</a></h2>
        <h2><a href="#">About</a></h2> */}
      </div>
    );
  }
}
 
export default Menu;