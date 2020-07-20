import React, { Component, Fragment } from "react";

import AboutUsDropdown from "../dropdowns/AboutUsDropdown";
import ObservatoryDropdown from "../dropdowns/ObservatoryDropdown";
import ResourcesDropdown from "../dropdowns/ResourcesDropdown";
import CommunityDropdown from "../dropdowns/CommunityDropdown";

class MainMenu extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-header">
          <div className="container">
            <div className="main-header-container d-flex">
              <div className="site-branding">
                <a href="#">
                  <span>
                    <img src="img/logo@3x.png" alt="" />
                  </span>
                </a>
              </div>
              <div className="main-header-bar-navigation">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                  <span className="navicon"></span>
                </label>
                <ul id="primary-menu" className="main-header-menu d-flex">
                  <li>
                    <a href="#">
                      <AboutUsDropdown content="hello"></AboutUsDropdown>
                    </a>
                    <ul className="dropdown"></ul>
                  </li>
                  <li>
                    <a href="#">
                      <ObservatoryDropdown></ObservatoryDropdown>
                    </a>
                    <ul className="dropdown"></ul>
                  </li>
                  <li>
                    <a href="#">
                      <ResourcesDropdown></ResourcesDropdown>
                    </a>
                    <ul className="dropdown"></ul>
                  </li>

                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainMenu;
