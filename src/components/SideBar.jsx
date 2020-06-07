import React, { Fragment } from 'react';
import { Accordion, Card, CardTitle, Button, Col } from "react-bootstrap";

import Datepicker from './Datepicker';

import SidePanel from './SidePanel';




class SideBar extends React.Component {
    render() {
        return (

           <Fragment > 
            
            
               
               
            <Card body style={{border: "white"}}  >
              <header style={{ fontFamily: 'museo-sans, sans-serif', fontSize: "18px", backgroundColor: "white" }}><strong>Filter</strong></header>
             



                <Accordion >
                <Card style={{border: "white"}} >
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black", width: "100%", paddingLeft: "0%"}}>
                        <p style={{float: "left", paddingTop: "7%"}}>Site</p> <div style={{float: 'right'}}> 
                        <img src="img/icons/quickview.svg" alt="location" height="40px" /></div>
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
                <hr style={{ border: '1.5px solid #95dbc7', marginTop: "0%" }}></hr>

               

            </Accordion>
            <Accordion>
                <Card style={{border: "white"}} >
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black", paddingLeft: "0%"}}>
                        <p style={{float: "left",  paddingTop: "7%"}}>Image Type</p> <div style={{float: 'right'}}>
                        <img src="img/icons/quickview.svg" alt="location" height="40px" /></div>
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

                <hr style={{ border: '1.5px solid #95dbc7', marginTop: "0%" }}></hr>

            </Accordion>
           

            <Datepicker />

            <Accordion>
                <Card style={{border: "white"}}>
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black", paddingLeft: "0%"}}>
                        <p style={{float: "left", paddingTop: "7%"}}>Frequency</p> <div style={{float: 'right'}}>
                        <img src="img/icons/quickview.svg" alt="location" height="40px" /></div>
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

                <hr style={{ border: '1.5px solid #95dbc7', marginTop: "0%" }}></hr>

            </Accordion>

      

          </Card>
        
       

            </Fragment>


        );
    }
}

export default SideBar;

