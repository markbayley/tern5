import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Form, Col } from "react-bootstrap";

const BreadCrumb = (props) => {
    console.log('hi There');
    return (
      <div
        style={{
          marginTop: "2px",
          marginBottom: "0px",
          borderBottom: "1.5px solid #66b3a6",
          color: "#043E4F",
          height: "50px"
        }}
      >
        <Breadcrumb  className="">
          <BreadcrumbItem>Site</BreadcrumbItem>
          <BreadcrumbItem>Image Type</BreadcrumbItem>
          <BreadcrumbItem>Plot</BreadcrumbItem>
          <BreadcrumbItem active>Date</BreadcrumbItem>
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