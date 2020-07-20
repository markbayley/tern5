import React from "react";
import { Button } from "react-bootstrap";

const ImageFilter = ({ value, handleFilter }) => {
  return (
    <div>
      <div className="">
        <div key="key">
          <Button
            style={{ width: "100%" }}
            variant="outline-secondary"
            onClick={handleFilter}
          >
            {value.label} ({value.doc_count})
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ImageFilter;
