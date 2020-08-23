import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Nav, Row, Col, Form} from "react-bootstrap";

const BreadCrumb = (props) => {
    return (
        <Breadcrumb  className="">
        <Row className={'breadcrumb-row'}
        activekey="/home"
      >
        <Nav.Item className={'nav-item'}>
          <Nav.Link href="/home">
            Access Policy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={'nav-item'}>
          <Nav.Link  eventKey="link-1">
            Data Licensing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={'nav-item'}>
          <Nav.Link eventKey="link-2">
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
    );
  }


export default BreadCrumb;
