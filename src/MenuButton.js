import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
  render() {
    return (
      <div id="menuToggle"
           onClick={this.props.handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
 
export default MenuButton;