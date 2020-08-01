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
import axios from "axios";
import LoginButton from "../buttons/LoginButton";
import RegisterButton from "../buttons/RegisterButton";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

{
  /* Connects to another test API unsplash, not the TERN API as yet, need to change over*/
}
function SearchBar3() {
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
      "https://api.unsplash.com/search/photos?page=2&per_page=15&query=" +
      term +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <Row   >
      <Navbar.Brand>
                <div className="site-branding">
                  <Link to="/">
                    <img src="img/logo@3x.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
     
       
        
    
    
        <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px',   color: "#6EB3A6", border: "1px solid red"}}>
     
          <h3 className="">
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
     
   
          {/*Search Input */}
          <InputGroup
            inline="true"
            className="searchbar"
            style={{
              height: "65px",
              width: "455px",
              paddingLeft: "2%",
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
              placeholder="Search images by region or by site"
              style={{
                fontSize: "20px",
                color: "#00565D",
                marginTop: "17px",
              }}
              aria-label="term"
            />
            <Button
              className="searchbutton"
              onClick={handleSubmit}
              variant="outline"
              type="submit"
              style={{
                height: "33px",
                width: "33px",
                marginTop: "3.7%",
                marginRight: "20px",
                borderRadius: "50px",
              }}
            ></Button>
          </InputGroup>
          {/*End of Search Input */}
     
      <a>
          <Link
            to="/login"
    
          >
            {" "}
            <LoginButton />{" "}
          </Link>

          <Link
            to="/login"
      
          >
            {" "}
            <RegisterButton />{" "}
          </Link>
          </a>
      
        </Container>
      </Row>
     
    </Router>
  );
}

export default SearchBar3;
