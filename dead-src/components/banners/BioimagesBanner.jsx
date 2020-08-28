import React, { useState } from "react";

import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function BioimagesBanner() {
  const [term, setPhoto] = useState("");
  const [clientId] = useState(
    "52d5d5565994d57c3160b4296aef1be1bf8985d9265e313f0f9db7eb1145d86d",
  );

  const [, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit() {
    // console.log(term);

    const url = `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${clientId}`;

    axios.get(url).then((response) => {
      // console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <>
      <div className="row content-bio">
        <div className="container content-bio-container">
          <Container
            style={{
              height: "5px",
              marginBottom: "20px",
              marginTop: "-40px",
              paddingTop: "20px",
              width: "80%",
            }}
          >
            <InputGroup
              inline
              className="searchbar center"
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
                placeholder="Search images by site"
                style={{ fontSize: "22px", width: "45%", color: "#66b3a6" }}
                aria-label="term"
              />

              <Button
                onClick={handleSubmit}
                className="btn-default"
                variant="outline"
                type="submit"
                style={{
                  marginLeft: "0%",
                  marginRight: "4%",
                  height: "60px",
                  width: "60px",
                  outline: "#fff",
                  borderRadius: "50px",
                  outlineOffset: "#fff",
                }}
              >
                <img
                  src="/img/icons/search-arrow.svg"
                  alt="bioimages search icon"
                  style={{
                    width: "130%",
                    paddingTop: "10%",
                    paddingRight: "20%",
                  }}
                />
              </Button>
            </InputGroup>
          </Container>
          <img
            className="icon"
            src="/img/icons/Bioimages icon.svg"
            height="70px"
            style={{ marginLeft: "20px" }}
            alt=""
          />
          <h1 className="mytitle"> Bioimages</h1>
        </div>
      </div>
    </>
  );
}

export default BioimagesBanner;
