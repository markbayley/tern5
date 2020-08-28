import React, { Fragment, useState } from "react";
//import DatePicker from "react-datepicker";
import { Card } from "react-bootstrap";
import DatePicker from 'react-date-picker'

//import "react-datepicker/dist/react-datepicker.css";


function Datepicker() {
  const [value, onChange] = useState(new Date());




  return (

    <Fragment>
      <div>

     
          <Card style={{ border: "white", textAlign: "left" }} >
         
          <h6 style={{ paddingTop: "0%", color: "#065f65", fontWeight: "500" }}>Date Range</h6> 
            
          

                <p style={{ paddingTop: "5%", color: "#065f65", fontWeight: "500" }}>Start Date</p> 
           
             
                <DatePicker 
                  onChange={onChange}
                  value={value}
                  width="10px"
                
                />
              
                
              <p style={{ paddingTop: "5%", color: "#065f65", fontWeight: "500" }}>End Date</p> 
               

                   
                <DatePicker 
                  onChange={onChange}
                  value={value}
                  width="10px"
                
                />
           


          </Card>


          <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>


      </div>
    </Fragment>
  );
}



export default Datepicker;  