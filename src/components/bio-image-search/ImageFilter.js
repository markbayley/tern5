import React from "react";
import { Form } from "react-bootstrap";

const ImageFilter = ({ key, value, handleFilter }) => {
  return (
    <div className="">
      <div key="{key}">
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            style={{ textTransform: "capitalize" }}
            label={value.label}
            onClick={handleFilter}
          />
          {/* {value.doc_count} */}
        </Form.Group>
      </div>
    </div>
  );
};
export default ImageFilter;
