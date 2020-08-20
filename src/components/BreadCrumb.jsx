import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Nav, Row, Col, Form} from "react-bootstrap";

const BreadCrumb = (props) => {
    console.log('hi There');
    return (
      <div
        style={{
          position: "fixed",
       
        
       
          borderTop: "1.5px solid #66b3a6",
          color: "#043E4F",
          width: "100%",
          zIndex: 20
         
        }}
      >
        <Breadcrumb  className="">
        <Row
        className=""
        activekey="/home"
        style={{
          position: "fixed",
          display: 'flex',
          justifyContent: 'center',
          bottom: 0,
          width: "103%",
          lineHeight: "15px",
          color: "#043E4F",
          height: "35px",
         
        }}
      >
        <Nav.Item style={{ padding: "0 20px 0px 20px", fontSize: "14px" }}>
          <Nav.Link style={{ color: "#043E4F"}} href="/home">
            Access Policy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding: "0 20px 0 20px", fontSize: "14px" }}>
          <Nav.Link style={{ color: "#043E4F" }} eventKey="link-1">
            Data Licensing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding: "0 20px 0 20px", fontSize: "14px" }}>
          <Nav.Link style={{color: "#043E4F"}} eventKey="link-2">
            Copyright
          </Nav.Link>
        </Nav.Item>
      </Row>
          {/* <BreadcrumbItem>Site</BreadcrumbItem>
          <BreadcrumbItem>Image Type</BreadcrumbItem>
          <BreadcrumbItem>Plot</BreadcrumbItem>
          <BreadcrumbItem active>Date</BreadcrumbItem> */}
          <Col className="select-all">
          <Form >
            <Form.Check type="checkbox" inline label="Select All" />
          </Form>
          </Col>
        </Breadcrumb>
        
      </div>
    );
  }


export default BreadCrumb;
