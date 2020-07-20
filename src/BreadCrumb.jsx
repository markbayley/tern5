import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Form } from "react-bootstrap";

class BreadCrumb extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "3px", marginBottom: "0px" }}>
        <Breadcrumb className="">
          <BreadcrumbItem>
            <a href="#"> Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#"> Site</a>
          </BreadcrumbItem>
          <BreadcrumbItem active> Image Type</BreadcrumbItem>
          <Form
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
          </Form>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumb;
