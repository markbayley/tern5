import React from 'react';
import { Jumbotron, Container, Form, Button, FormControl } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MapBox from './MapBox';


export default function SearchBar() {
 
    return (
      <Router>
      <div>
   



      <Jumbotron fluid style={{ borderBottom: "1.5px solid #95dbc7" }}>
        <Container >

          <Form inline className="center" >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Link to="/search">
            <Button variant="outline-success">Search</Button>
            </Link>
          </Form>

        </Container>

      </Jumbotron>


      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/search">
              <Search />
            </Route>
  
      
  
       
          </Switch>
        </div>
      </Router>



    );
  }



function Search() {
  return (
    <div>
      <MapBox />

      



    </div>
  );
}



