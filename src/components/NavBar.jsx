import React, { useState } from "react";
import { Container, Button, FormControl, Col, Row, InputGroup, Navbar, Image } from 'react-bootstrap';
import axios from "axios";
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';


import MainBanner from './MainBanner';
import SignIn from './SignIn';
import MainFooter from './MainFooter';

import BioimagesSubFooter from './BioimagesSubFooter'
import MapSearch from './MapSearch';
import State from './State';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavBar() {
  const [term, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "52d5d5565994d57c3160b4296aef1be1bf8985d9265e313f0f9db7eb1145d86d"
  );

  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    console.log(term);

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      term +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  function Home() {
    return (
      <div>

        <MainBanner />
        <SignIn />
        <MainFooter />
        <BioimagesSubFooter />
      </div>
    );
  }

  function DataPortal() {
    return (
      <div>

        <MapSearch />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Navbar bg="white" expand="lg" style={{ height: "4%", borderBottom: "1.5px solid #065f65" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Col sm={2} style={{ position: "absolute", left: "0%" }}>
              <Navbar.Brand href="#home">
                <div class="site-branding">
                  <a href="#"><span><img src="img/logo@3x.png" alt="" /></span></a>
                </div>
              </Navbar.Brand>
            </Col>

            <Container>
              <Col style={{
                height: "100px"
              }}>
                <h3 style={{
                  position: "absolute",
                  right: "80%",
                  top: "30%",
                  color: "#065f65",

                }}>
                  <Image class="icon" src="/img/icons/bioimages-download.svg"
                    height="40px" />Bioimages
                    </h3>

                <InputGroup inline className="searchbar"
                  style={{
                    height: "60px",
                    width: "455px",
                    paddingLeft: "2%",

                    position: "absolute",
                    right: "18%",
                    top: "20%"
                  }}>

                  <Image fluid src="/img/icons/search-bioimages-icon.svg" alt="bioimages search icon"
                    style={{
                      width: "8%",
                      paddingTop: "2%"
                    }} />
                  <FormControl
                    onChange={handleChange}
                    id="place"
                    type="text"
                    placeholder="Search images by region or site"
                    style={{ fontSize: "20px", color: "#00565D", marginTop: "17px" }}
                    aria-label="term"
                  />
                  <Button className="searchbutton" onClick={handleSubmit}
                    variant="outline"
                    type="submit"
                    style={{
                      height: "33px",
                      width: "33px",
                      marginTop: "3.7%",
                      marginRight: "20px"
                    }}>
                  </Button>
                </InputGroup>
              </Col>

              <Link to="/login" style={{marginRight: ".5%"}}> <LoginButton /> </Link>

              <Link to="/login" style={{marginRight: ".5%"}}> <RegisterButton /> </Link>

              <Row>
                <Col>
                  {result.map((term) => (
                    <Image src={term.urls.small} width="210px" height="210px" style={{ margin: "10px 13px 50px 13px" }} />
                  ))}
                </Col>
              </Row>


            </Container>
          </Navbar.Collapse>
        </Navbar>

        <Switch>

          <Route path='/login' component={() => {
            window.location.href = "https://auth-test.tern.org.au/auth/realms/tern/protocol/openid-connect/auth?client_id=account&redirect_uri=https%3A%2F%2Fauth-test.tern.org.au%2Fauth%2Frealms%2Ftern%2Faccount%2Flogin-redirect&state=0%2F8b80b485-2114-431c-b92a-1a27748ee396&response_type=code&scope=openid";
            return null;
          }} />
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

export default NavBar;