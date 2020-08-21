import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectedFilterAction } from "../../store/reducer";

const ImageFilter = ({ id, value }) => {
  const dispatch = useDispatch();
  // TODO: triggers a re-render on any filter change ... probably not wanted
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  // Not used yet - experimenting with handleChange!

  // TODO this handle will need to have the api handle
  // multiple filters, i.e. same filter names but different values
  // THe API must be able to handle array type which it does not currently.
  // Something like this: image_type=ancillary,photopoint,phenocam
  const handleChange = (event) => {
    // console.log("event.target.value=", event.target.checked);
    // console.log("id=", id);
    // setStatus(false);

    const arr = id.split("=");
    const fKey = arr[0];
    const fValue = arr[1];
    const addFilter = { [fKey]: fValue };
    let updatedFilter = {};
    if (event.target.checked === true) {
      // Add filter
      updatedFilter = { ...selectedFilter, ...addFilter };
    } else {
      // Remove filter
      updatedFilter = { ...selectedFilter };
      delete updatedFilter[fValue];
    }
    // dispatch(fetchSearchAction({ selectedFilter: updatedFilter }));
    dispatch(selectedFilterAction(updatedFilter));
  };

  return (
    <div className="">
      <div key="{id}">
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            style={{ textTransform: "capitalize" }}
            label={value.label}
            // checked={status}
            // onClick={() => handleFilter(id)}
            onChange={(event) => handleChange(event)}
          />
          {/* {value.doc_count} */}
        </Form.Group>
      </div>
    </div>
    // + " (" + value.doc_count + " Images)"
  );
};

ImageFilter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImageFilter;
