import React from "react";

import MainMenu from './MainMenu';
import BioimagesMenu from './BioimagesMenu';




import BioimagesBanner from './BioimagesBanner';
import MainBanner from './MainBanner';
import SignIn from './SignIn';
import MapBox from './MapBox';



import NavBar from './NavBar';
import SearchBar from './SearchBar';
import BioimagesSubFooter from './BioimagesSubFooter'

import MapSearch from './MapSearch';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Data() {
  return (
    <Router>
      <div>

        <div class="above-header">
          <div class="container">
            <div class="above-header-section-wrap d-flex">
              <div class="above-header-section above-header-section-1">
                <div class="user-select">
                  <Link to="/"> <img src="img/logo-mini-all.png" alt="" /> </Link>
                </div>
              </div>

              <div class="above-header-section above-header-section-2">
                <div class="user-select" style={{ float: "left" }}>
                  <Link to="/data">Data</Link>
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

          <Route path="/authentication">
            <Authentication />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>

      <MainMenu />
      <MainBanner />
      <SignIn />



    </div>
  );
}

function DataPortal() {
  return (
    <div>
      <BioimagesMenu />
      <BioimagesBanner />
      <MapSearch />
    </div>
  );
}

function Authentication() {
  return (
    <div>
      <MainMenu />
      <MainBanner />
      <SignIn />
    </div>
  );
}

