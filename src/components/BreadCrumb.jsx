import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Form, Col, Row, Nav } from "react-bootstrap";

const BreadCrumb = (props) => {
    return (
      <div
        style={{
          position: "fixed",
          borderTop: "1.5px solid #66b3a6",
          color: "#043E4F",
          width: "100%",
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffp'
        
         
        }}
      >


  
     
   
        
        <Nav.Item style={{ padding: "0 20px 0px 20px", fontSize: "16px" }}>
          <Nav.Link style={{ color: "#003d4f" }} href="/home">
            Access Policy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding: "0 20px 0 20px", fontSize: "16px" }}>
          <Nav.Link style={{ color: "#003d4f" }} eventKey="link-1">
            Data Licensing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding: "0 20px 0 20px", fontSize: "16px" }}>
          <Nav.Link style={{ color: "#003d4f" }} eventKey="link-2">
            Copyright
          </Nav.Link>
        </Nav.Item>
 
      

     
    
        
      </div>
    );
  }


export default BreadCrumb;
