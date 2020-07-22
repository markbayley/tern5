import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {
  Form,
} from "react-bootstrap";


class BreadCrumb extends React.Component {
    render() {
        return (

          
    <div style={{ marginTop: "2px", marginBottom: "0px", borderBottom: "1.5px solid #66b3a6", color: "#66b3a6"}} >
      
      <Breadcrumb style={{height: "50px", margin: "0%"}} className="" > 
        <BreadcrumbItem >Site</BreadcrumbItem>
        <BreadcrumbItem>Image Type</BreadcrumbItem>
        <BreadcrumbItem>Plot</BreadcrumbItem>
        <BreadcrumbItem active>Date</BreadcrumbItem>
        {/*<Form
          className="right"
          style={{ paddingTop: "5px", color: "#065f65" }}
        >
         {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`inline-${type}-1`}
                inline
                label="Select All"
              />
            </div>
          ))}
        </Form> */}
    
      </Breadcrumb>
     
  
    </div>
  );
}
}

export default BreadCrumb;
