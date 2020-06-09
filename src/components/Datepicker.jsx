import React, { Fragment, useState  } from "react";
//import DatePicker from "react-datepicker";
import { Accordion, Card, Button } from "react-bootstrap";
import DatePicker from 'react-date-picker'

//import "react-datepicker/dist/react-datepicker.css";


function Datepicker()  {
  const [value, onChange] = useState(new Date());
 

 
 
    return (
      
<Fragment>
      <div>
    
      <Accordion>
                <Card style={{border: "white", textAlign: "left"}} >
                    <Card.Header style={{backgroundColor: "white"}}>
                    
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "#065f65", width: "200px", marginLeft: "-25px"}}>
                        <p style={{float: "left", paddingTop: "6%", fontWeight: "100"}}>Date Range</p> <div style={{float: 'right'}}> 
                        <img src="img/icons/quickview.svg" alt="location" height="40px" /></div>
                        </Accordion.Toggle>
                    </Card.Header>
              
                    <Accordion.Collapse eventKey="0" style={{ }}>
                        <Card.Body> <p style={{ color: 'lightblue', paddingTop: "26%"  }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> Start Date</p>
                        <div style={{marginLeft: "-20px"}}> <DatePicker
        onChange={onChange}
        value={value}
      /></div>
                        <p style={{ color: 'lightblue', paddingTop: "16%" }}><i class="fa fa-circle fa-lg" aria-hidden="true"></i> End Date</p>
                       
                       
                       <div style={{marginLeft: "-20px"}}> <DatePicker
        onChange={onChange}
        value={value}
      /></div>
                        
                        
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>
 

                <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

            </Accordion>

    

     
     
      </div>
      </Fragment>
    );
  }







export default Datepicker;  