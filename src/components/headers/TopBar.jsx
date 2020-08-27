import React from "react";
import { Navbar, NavItem, Nav, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import TERNDataDropdown from "../dropdowns/TERNDataDropdown";
import CommunityDropdown from "../dropdowns/CommunityDropdown";
import CoESRADropdown from "../dropdowns/CoESRADropdown";
import DataVisualiserDropdown from "../dropdowns/DataVisualiserDropdown";
import './TopBar.scss';

export default function TopBar() {
  return (
    <div>
      <div className="above-header">
        <div className="container">
          <div className="above-header-section-wrap d-flex">
            <Navbar expand="lg">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                style={{ backgroundColor: "#fff" }}
              />
              {/* <Button style={{ borderRadius: "10px", float: "left" }} variant="flat" size="sm">
                <span style={{ paddingRight: "5px" }}>
                  <i className="fa fa-user"> </i>
                </span>
              </Button> */}

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav navbar className="">
                  <NavItem>
                    <TERNDataDropdown />
                  </NavItem>
                  <NavItem>
                    <DataVisualiserDropdown />
                  </NavItem>
                  <NavItem>
                    <CoESRADropdown />
                  </NavItem>
                  <NavItem>
                    <CommunityDropdown />
                  </NavItem>
                </Nav>
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
                <Link to="/data" style={{ color: "#fff", fontSize: "16px" }}>
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
  return <div />;
}
