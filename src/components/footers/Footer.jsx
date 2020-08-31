import React from "react";
import { Container, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container
        className=""
        fluid
        style={{
          backgroundColor: "#043E4F"
        }}
      />
      <Nav
        className="footer-partners justify-content-center"
        activeKey="/home"
        style={{ lineHeight: "30px", backgroundColor: "#043E4F" }}
      >
        <Nav.Item style={{ padding: "0 20px 0px 20px", fontSize: "14px" }}>
          <Nav.Link style={{ color: "white"}} href="/home">
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
      </Nav>
      <Container />
      </>
  );
};

export default Footer;