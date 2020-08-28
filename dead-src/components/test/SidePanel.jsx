import React, { Fragment } from 'react';
import { Button, Col } from "react-bootstrap";

import { Accordion, Card, CardTitle } from "react-bootstrap";


  

  
  
  class SidePanel extends React.Component {
      render() {
          return (
  
            <Fragment > 
            
           <Col>
       
                <Accordion >
                <Card style={{border: "white"}} >
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black", width: "100%", paddingLeft: "0%"}}>
                        <p style={{float: "left", paddingTop: "10%"}}>Site</p> <div style={{float: 'right', paddingTop: "10%"}}><i class="fa fa-plus" aria-hidden="true"></i></div>
                        </Accordion.Toggle>
                    </Card.Header>
                   
                    <Accordion.Collapse eventKey="0" >
                        <Card.Body> <p style={{ color: 'lightblue', padding: "0 !important"}} ><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Item 1</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: "Tomato" }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Item 2</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: '#95dbc7' }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Item 3</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Item 4</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <hr style={{ border: '1.5px solid #95dbc7' }}></hr>

               

            </Accordion>
            <Accordion>
                <Card style={{border: "white"}} >
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black", width: "100%", paddingLeft: "0%"}}>
                        <p style={{float: "left", paddingTop: "10%"}}>Image Type</p> <div style={{float: 'right', paddingTop: "10%"}}><i class="fa fa-plus" aria-hidden="true"></i></div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: 'lightblue' }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Leaf Area Index</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: "Tomato" }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Phenocam</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: ' #95dbc7' }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Photopoint</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Panorama</p></Card.Body>
                    </Accordion.Collapse>

                    <Accordion.Collapse eventKey="0">
                        <Card.Header>Ancillary Images</Card.Header>
                    </Accordion.Collapse>


                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p style={{ color: "Tomato" }}><i class="fa fa-circle-thin fa-lg" aria-hidden="true"></i>  Fungi</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p style={{ color: ' #95dbc7' }}><i class="fa fa-circle-thin fa-lg" aria-hidden="true"></i>  Flora</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p><i class="fa fa-circle-thin fa-lg" aria-hidden="true"></i> Fauna</p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p><i class="fa fa-circle-thin fa-lg" aria-hidden="true"></i>  General</p></Card.Body>
                    </Accordion.Collapse>

                </Card>

                <hr style={{ border: '1.5px solid #95dbc7' }}></hr>

            </Accordion>
           

     

            <Accordion>
                <Card style={{border: "white"}}>
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black", width: "100%", paddingLeft: "0%"}}>
                        <p style={{float: "left", paddingTop: "10%"}}>Frequency</p> <div style={{float: 'right', paddingTop: "10%" }}><i class="fa fa-plus" aria-hidden="true"></i></div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: 'lightblue' }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> </p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: "Tomato" }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> </p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <p style={{ color: ' #95dbc7' }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i></p></Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p><i class="fa fa-circle fa-lg" aria-hidden="true"></i> </p></Card.Body>
                    </Accordion.Collapse>

              


                   

                </Card>

                <hr style={{ border: '1.5px solid #95dbc7' }}></hr>

            </Accordion>

            </Col>

            <Col>
            <div style={{borderRight: "70px solid green",  height: "100%"}}></div>
 
            </Col>
       

            </Fragment>
  
  
          );
      }
  }
  
  export default SidePanel;
  