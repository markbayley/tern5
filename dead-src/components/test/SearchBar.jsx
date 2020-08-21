import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Button,
  FormControl,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";

import axios from "axios";

function SearchBar() {
  const [term, setPhoto] = useState("");
  const [clientId] = useState(
    "52d5d5565994d57c3160b4296aef1be1bf8985d9265e313f0f9db7eb1145d86d"
  );

  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit() {

    const url = `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${clientId}`;

    axios.get(url).then((response) => {
      setResult(response.data.results);
    });
  }

  return (
    <Jumbotron style={{ borderBottom: "1.5px solid #66b3a6" }}>
      <Container>
        <Row>
          <Col>
            {result.map((rterm) => (
              <img
                src={rterm.urls.small}
                width="200px"
                height="200px"
                style={{ margin: "10px 13px 50px 13px" }}
                alt="result"
              />
            ))}
          </Col>
        </Row>

        <InputGroup
          inline
          className="searchbar"
          style={{ height: "80px", marginLeft: "25%", paddingLeft: "2%" }}
        >
          <img
            src="/img/icons/search-bioimages-icon.svg"
            alt="bioimages search icon"
            style={{ width: "8%", paddingTop: "2%", marginRight: "0%" }}
          />

          <FormControl
            onChange={handleChange}
            id="place"
            type="text"
            placeholder=" region or by site"
            className="mr-sm-2"
            style={{ fontSize: "22px", width: "75%", color: "#66b3a6" }}
            aria-label="term"
          />
          <br />
          <br />

          <Button
            onClick={handleSubmit}
            variant="outline"
            type="submit"
            style={{
              marginLeft: "0%",
              height: "50px",
              width: "50px",
              border: "1px solid red",
            }}
          />
        </InputGroup>
      </Container>
    </Jumbotron>
  );
}

export default SearchBar;
