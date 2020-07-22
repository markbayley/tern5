import React, { Component } from "react";

class Legend extends Component {
  render() {
    return (
      <div className="index" style={{ backgroundColor: "white" }}>
        <img src="/img/LAI_circle.svg" width="35px" alt="" />
        Leaf Area Index{" "}
        <img
          style={{ float: "right" }}
          src="/img/LAI.svg"
          width="25px"
          alt=""
        />{" "}
        <br />
        <img src="/img/Panorama_circle.svg" width="35px" alt="" />
        Panorama{" "}
        <img
          style={{ float: "right" }}
          src="/img/panoramic.svg"
          width="25px"
          alt=""
        />{" "}
        <br />
        <img src="/img/Phenocam_circle.svg" width="35px" alt="" />
        Phenocam{" "}
        <img
          style={{ float: "right" }}
          src="/img/phenocam.svg"
          width="25px"
          alt=""
        />{" "}
        <br />
        <img src="/img/photopoint_circle.svg" width="35px" alt="" />
        Photopoint{" "}
        <img
          style={{ float: "right" }}
          src="/img/photopoint.svg"
          width="25px"
          alt=""
        />
      </div>
    );
  }
}

export default Legend;
