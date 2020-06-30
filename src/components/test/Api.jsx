import React, { useState } from "react";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button, InputGroup, FormControl, Jumbotron, Form } from "react-bootstrap";


import Toggle from '../Toggle';

function Api() {
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

       


            <Container>
                <Row>
                    <Col>
                        {result.map((term) => (
                        
                            <img
                                src={term.urls.small}
                                width="200px"
                                height="200px"
                                style={{margin: "20px 39px 20px 0px"}}
                            />
                          
                        ))}

                    </Col>
                </Row>
            </Container>


             


    




  <Toggle />




            
          
        </div>
    );
}

export default Api;


