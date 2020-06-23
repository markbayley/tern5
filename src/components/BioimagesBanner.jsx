import React, { Component, Fragment, useState } from 'react';
import Image from 'react-bootstrap/Image'


import axios from "axios";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button, InputGroup, FormControl, Jumbotron, Form } from "react-bootstrap";

function BioimagesBanner() {
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

            <Fragment>
        
            <div class="row content-bio"  >
                <div class="container content-bio-container" >

 
              <img class="icon" src="/img/icons/Bioimages icon.svg"  height="70px" style={{marginLeft:"20px"}}/>
                    <h1 class="mytitle"> Bioimages</h1>
               
                </div>
                
            </div>


            </Fragment>




  








        );
    }



export default BioimagesBanner;