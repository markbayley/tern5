import React, { useState } from "react";
import {
  Container,
  Button,
  FormControl,
  Col,
  Row,
  InputGroup,
  Navbar,
  Image,
  Form,
  Modal,
} from "react-bootstrap";
import {
  BrowserRouter as Router, Switch, Route, Link,
} from "react-router-dom";
import LoginButton from "../buttons/LoginButton";

/* Connects to another test API unsplash, not the TERN API as yet, need to change over */
function SearchBar() {
  const [, setPhoto] = useState("");

  const [result] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <div>
        <Navbar
          bg="white"
          expand="lg"
          style={{ height: "4%", borderBottom: "1.5px solid #6EB3A6" }}
        >
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}
          <Col sm={2} style={{ position: "absolute", left: "0%" }}>
            <Navbar.Brand>
              <div className="site-branding">
                <Link to="/">
                  <img src="img/logo@3x.png" alt="" />
                </Link>
              </div>
            </Navbar.Brand>
          </Col>

          <Container style={{
            display: "flex", justifyContent: "space-between", alignItems: "center", height: "100px", color: "#6EB3A6",
          }}
          >

            <h3 className="biologo">
              <Image
                className="icon"
                src="/img/icons/bioimages-download.svg"
                style={{
                  marginBottom: "3%",
                  height: "35px",
                  marginTop: "0%",

                }}
              />
              Bioimages
            </h3>

            {/* Search Input */}
            <InputGroup
              inline="true"
              className="searchbar"
              style={{
                height: "65px",
                width: "455px",
                paddingLeft: "1.3%",
              }}
            >
              <Image
                fluid
                src="/img/icons/search-bioimages-icon.svg"
                alt="bioimages search icon"
                style={{
                  width: "8%",
                  paddingTop: "2%",
                }}
              />
              <FormControl
                onChange={handleChange}
                id="place"
                type="text"
                placeholder="Search images by site or image type"
                style={{
                  fontSize: "20px",
                  color: "#00565D",
                  marginTop: "17px",
                }}
                aria-label="term"
              />
              <Button
                className="searchbutton"
                variant="outline"
                type="submit"
                style={{
                  height: "33px",
                  width: "33px",
                  marginTop: "3.7%",
                  marginRight: "20px",
                  borderRadius: "50px",
                }}
              />
            </InputGroup>
            {/* End of Search Input */}

            {/* Login Buttons */}
            <div className="login">
              <Link to="/login">
                {" "}
                <LoginButton />
                {" "}
              </Link>
            </div>
          </Container>

          {/* </Navbar.Collapse> */}
        </Navbar>

        {/* Search Results */}
        <Container style={{ paddingLeft: "3%" }}>
          <Row>
            {result.map((term) => (
              <div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Image Title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Image src={term.urls.small} width="465px" height="465px" />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                      Download
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Image
                  onClick={handleShow}
                  src={term.urls.small}
                  width="210px"
                  height="210px"
                  style={{ margin: "10px 13px 10px 13px" }}
                />
                <br />
                <Form style={{ paddingTop: "5px" }}>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`inline-${type}-1`}
                        inline
                        label="View"
                      />
                      <Form.Check
                        inline
                        label="Select"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Download"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            ))}
          </Row>
        </Container>
        {/* End of Search Results */}

        <Switch>
          <Route
            path="/login"
            component={() => {
              window.location.href = "https://auth-test.tern.org.au/auth/realms/tern/protocol/openid-connect/auth?client_id=account&redirect_uri=https%3A%2F%2Fauth-test.tern.org.au%2Fauth%2Frealms%2Ftern%2Faccount%2Flogin-redirect&state=0%2F8b80b485-2114-431c-b92a-1a27748ee396&response_type=code&scope=openid";
              return null;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default SearchBar;
