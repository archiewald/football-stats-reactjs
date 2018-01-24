import React, { Component } from "react";
import MenuButton from "./MenuButton"; 
import Menu from "./Menu"; 


class MenuContainer extends Component {
  constructor (props,context) {
    super(props, context);

    this.state = {
      visible:false
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  
  render() {
    return (
      <div>
        <header>
          <MenuButton handleClick={this.handleClick}/>
          <h1>football-stats</h1>
        </header>
        <Menu handleClick={this.handleClick}
              menuVisibility={this.state.visible}/>
      </div>
    );
  }
}
 
export default MenuContainer;

