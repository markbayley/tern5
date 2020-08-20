import React from "react";
import { Row } from "react-bootstrap";

function IconBar() {
  return (
    <div >
      <Row style={{ position: "absolute", left: "106%", top: "10.5%"}}>
        <img src="img/icons/Location.svg" alt="location" height="40px" />
      </Row>

      <Row style={{ position: "absolute", left: "106%", top: "34%" }}>
        <img src="img/icons/camera1.svg" alt="location" height="40px" />
      </Row>

      <Row style={{ position: "absolute", left: "106%", top: "26.5%" }}>
        <img src="img/icons/calendar.svg" alt="location" height="40px" />
      </Row>

      <Row style={{ position: "absolute", left: "106%", top: "44.5%" }}>
        <img src="img/icons/frequency.svg" alt="location" height="40px" />
      </Row>
    </div>
  );
}

export default IconBar;
