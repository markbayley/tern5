import React, { Component } from "react";

class MapNav extends Component {
  render() {
    return (
    
      <div className="mapnav" style={{ backgroundColor: "#043E4F" }} >
        Map Tools
     
        <button className="mapnav-btn">z</button>
        <button className="mapnav-btn">y</button>
   
        <button className="mapnav-button">go</button>
        <button className="mapnav-button">x</button>
        <input placeholder="Search"></input>
        <button className="mapnav-btn">y</button>
      </div>
      
    );
  }
}

export default MapNav;
