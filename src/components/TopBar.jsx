import React from "react";
import TERNDataDropdown from "./dropdowns/TERNDataDropdown";
import CommunityDropdown from "./dropdowns/CommunityDropdown";
import CoESRADropdown from "./dropdowns/CoESRADropdown";
import DataVisualiserDropdown from "./dropdowns/DataVisualiserDropdown";
import { Col, Row, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function TopBar() {
  return (
    <Router>
      <div>
        <div className="above-header">
          <div className="container">
            <div className="above-header-section-wrap d-flex">
              <Navbar expand="lg" style={{ padding: "0%" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{float: 'left'}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Row>
                    <Col>
                      {" "}
                      <TERNDataDropdown />
                    </Col>
                    <Col>
                      {" "}
                      <DataVisualiserDropdown />
                    </Col>
                    <Col style={{ marginLeft: "30px" }}>
                      {" "}
                      <CoESRADropdown />
                    </Col>
                    <Col style={{ marginLeft: "-20px", marginRight: "20px" }}>
                      <CommunityDropdown />
                    </Col>
                  </Row>
                </Navbar.Collapse>
              </Navbar>

              <div className="above-header-section above-header-section-1">
                <div className="user-select">
                  <Link to="/">
                    {" "}
                    <img src="img/logo-mini-all.png" alt="logo" />{" "}
                  </Link>
                </div>
              </div>
              <div className="above-header-section above-header-section-2">
                <div id="data">
                  {" "}
                  <Link to="/data" style={{ color: "#fff", fontSize: "15px" }}>
                    <p className="center">Data</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/data">
            <DataPortal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* <MainMenu />
      <MainBanner />
      <SignIn />
      <MainFooter />
      <BioimagesSubFooter /> */}
    </div>
  );
}

function DataPortal() {
  return <div></div>;
}
