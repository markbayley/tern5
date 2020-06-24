import React, { useState } from "react";
import { Container, Button, FormControl, Col, Row, InputGroup, Navbar, Image } from 'react-bootstrap';
import axios from "axios";


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

  return (
    <div>
      <Navbar bg="white" expand="lg" style={{ height: "4%", borderBottom: "1.5px solid #065f65" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Col style={{marginLeft: "-360px"}}>  <Navbar.Brand href="#home">
              <div class="site-branding">
                <a href="#"><span><img src="img/logo@3x.png" alt="" /></span></a>
              </div>
            </Navbar.Brand></Col>
            <Col inline sm={3} style={{ marginRight: "20%"}}>
            <div class="container content-bio-container" style={{marginLeft: "0px"}}>
              <Image class="icon" src="/img/icons/bioimages-download.svg"  height="35px" style={{paddingTop: "1%"}} />
                    <div style={{ marginRight: "58px", paddingTop: "0%", color: "#003d4f", fontSize: "32px"}} class="mytitle"><strong>Bioimages</strong> </div>
               
                </div>
                </Col>
           
            <InputGroup inline className="searchbar" style={{ height: "60px", width: "455px", paddingLeft: "2%", backgroundSize: "auto", marginRight: "33%" }}>
              <Image fluid src="/img/icons/search-bioimages-icon.svg" alt="bioimages search icon" style={{ width: "8%", paddingTop: "2%"}} />
              <FormControl
                onChange={handleChange}
                id="place"
                type="text"
                placeholder="Search images by region or site"
               
            
                style={{ fontSize: "20px", color: "#00565D",  marginTop: "17px"}}
                aria-label="term"
              />          
              <Button className="searchbutton" onClick={handleSubmit}
                variant="outline"
                type="submit"
                style={{ height: "33px", width: "33px", marginTop: "3.7%", marginRight: "20px"}}>
              </Button>
            </InputGroup>
     
            <Row>
                    <Col>
                        {result.map((term) => ( 
                            <Image src={term.urls.small} width="210px" height="210px" style={{margin: "10px 13px 50px 13px"}} />
                        ))}
                    </Col>
             </Row>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;