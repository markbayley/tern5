import React from "react";
import {
  Button,
  Col,
  Input,
  Row,
  InputGroup,
  FormGroup,
  Form,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

import { AppHeader } from "tern-react";

import "./SearchBar.scss";

function SearchBar() {

  return (
    <AppHeader fluid>
      <Nav navbar className="justify-content-between" style={{ width: "100%" }}>
        <NavItem className="bioimages-branding">
          <h3>
            <img
              className="icon"
              src="/img/icons/bioimages-download.svg"
              alt=""
              style={{ wdith: "35px", height: "35px" }} />
          Bioimages
        </h3>
        </NavItem>
        <NavItem className="">
          {/*Search Input */}
          <Form inline className="searchbar">
            <FormGroup inline>
              <img
                src="/img/icons/search-bioimages-icon.svg"
                alt="bioimages search icon" />
              <Input
                id="place"
                type="text"
                placeholder="Search images by region or by site"
                aria-label="term" />
              <Button
                outline
                className="searchbutton"
                type="submit">
              </Button>
            </FormGroup>
          </Form>
        </NavItem>

        {/*Login Buttons */}
        <NavItem>
          <Link to="/login">
            {" "}
            <Button outline className="loginbutton">Login</Button>
          </Link>
        </NavItem>
      </Nav>
    </AppHeader >
  );
}

export default SearchBar;
