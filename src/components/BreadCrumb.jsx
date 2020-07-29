import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Form, Col } from "react-bootstrap";

class BreadCrumb extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: "2px",
          marginBottom: "0px",
          borderBottom: "1.5px solid #66b3a6",
          color: "#66b3a6",
        }}
      >
        <Breadcrumb style={{ height: "50px", margin: "0%" }} className="">
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
}

export default BreadCrumb;
