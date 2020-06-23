import React from 'react';

import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchBar from './SearchBar';

function NavBar() {
 
    return (

      <Navbar bg="white" expand="lg" style={{height: "4%"}}>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   
    <Container>
  
    <Col>  <Navbar.Brand href="#home"> 
   <div class="site-branding">
          <a href="#"><span><img src="img/logo@3x.png" alt="" /></span></a>
    </div>
    </Navbar.Brand></Col>
   
     <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    
 
  </Container>
   
   
  </Navbar.Collapse>
  </Navbar>


  
  
     

    );
  }



export default NavBar;