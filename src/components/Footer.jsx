import React from "react";
import { Nav, Row } from "react-bootstrap";

function Footer() {
  return (
      <Row
        className={'footer-row'}
        activekey="/home"
      >
        <Nav.Item className={'footer-item'}>
          <Nav.Link style={{ color: "white" }} href="/home">
            Access Policy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding: "0 20px 0 20px", fontSize: "14px" }}>
          <Nav.Link style={{ color: "white" }} eventKey="link-1">
            Data Licensing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding: "0 20px 0 20px", fontSize: "14px" }}>
          <Nav.Link style={{ color: "white" }} eventKey="link-2">
            Copyright
          </Nav.Link>
        </Nav.Item>
      </Row>
  );
}

export default Footer;
