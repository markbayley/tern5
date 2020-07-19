import React from "react";

import TERNDataDropdown from './dropdowns/TERNDataDropdown';
import CommunityDropdown from './dropdowns/CommunityDropdown';
import CoESRADropdown from './dropdowns/CoESRADropdown';
import DataVisualiserDropdown from './dropdowns/DataVisualiserDropdown';
import MainBanner from './banners/MainBanner';
import SignIn from './signin/SignIn';
import MainFooter from './footers/MainFooter';
import NavBar from './SearchBar';
import BioimagesSubFooter from './footers/BioimagesSubFooter'
//import MapSearch from './MapSearch';
import MainMenu from './signin/MainMenu'



import { Col, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import LandingPage from "./LandingPage/LandingPage";


export default function TopBar() {
  return (
    <Router>
      <div>
        <div className="above-header">
          <div className="container">
            <div className="above-header-section-wrap d-flex">
              <Row style={{ marginRight: "3%", paddingTop: ".5%" }}>
                <Col style={{ marginRight: "15px" }}>   <TERNDataDropdown /></Col>
                <Col> <DataVisualiserDropdown /></Col>
                <Col style={{ marginLeft: "40px" }}> <CoESRADropdown /></Col>
                <Col><CommunityDropdown /></Col>
              </Row>
              <div className="above-header-section above-header-section-1">
                <div className="user-select">
                  <Link to="/"> <img src="img/logo-mini-all.png" alt="logo" /> </Link>
                </div>
              </div>
              <div className="above-header-section above-header-section-2">
                <div id="data"> <Link to="/data" style={{ color: "#fff", fontSize: "16px" }}><p className="center">Data</p></Link></div>
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
  return (
    <div>
     
  
  
    
    </div>
  );
}



