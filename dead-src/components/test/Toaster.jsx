import React, {useState} from 'react';
import {

    Button,
    Col,
    Row,
    Toast
  
  } from "react-bootstrap";

  function Toaster() {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col >
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">This site was added to filter!</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body></Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button variant="outline-secondary" size="sm" style={{justifyContent: "end"}} onClick={() => setShow(true)}>View Results?</Button>
        </Col>
      </Row>
    );
  }
  
export default Toaster;