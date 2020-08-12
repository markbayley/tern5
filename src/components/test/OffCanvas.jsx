"use strict";

import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";


export default class OffcCanvas extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
    return (
      <OffCanvas
        width={250}
      
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"left"}
      >
        <OffCanvasBody
          className="bodyClass"
          style={{ fontSize: "10px" }}
        >
         
          <p>
            <a href="#" onClick={this.handleClick.bind(this)}>
              Click here
            </a>{" "}
          
          </p>
        </OffCanvasBody>
        <OffCanvasMenu className="menuClass">
        <a href="#" onClick={this.handleClick.bind(this)}>
                Toggle Menu
              </a>
          <p>Placeholder content.</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>
            
            </li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}