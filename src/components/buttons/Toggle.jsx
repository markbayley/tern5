import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Image } from "react-bootstrap";
import './buttons.scss';


class Toggle extends Component {
  render() {
    return (
      <>
        <Link to="map" smooth={true} duration={1000}>
          <Button
            style={{ width: "106px" }}
            className="togglemap"
            variant="toggle"
          >
            <Image width="30px" src="/img/map.png" alt="map" /> Map
          </Button>
        </Link>
        <Link to="gallery" smooth={true} duration={1000}>
          <Button className="toggleimages" variant="toggle">
            <Image width="25px" src="/img/icons/bioimages-download-white.svg" alt="bioimages icon" /> Images
          </Button>
        </Link>
      </>
    );
  }
}

export default Toggle;
