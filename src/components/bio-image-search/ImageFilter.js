import React from "react";
import { Form } from "react-bootstrap";

const ImageFilter = ({ value, handleFilter }) => {
  return (
    <div className="">
      <div key="{key}">
        <Form.Group controlId="formBasicCheckbox"  style={{ margin: '0%'}}>
          <Form.Check
            type="checkbox"
            style={{ textTransform: "capitalize" }}
            label={value.label }
            onClick={handleFilter}
          />
          {/* {value.doc_count} */}
        </Form.Group>
      </div>
    </div>
    // + " (" + value.doc_count + " Images)"
  );
};
export default ImageFilter;
