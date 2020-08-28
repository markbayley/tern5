import React from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Col } from "react-bootstrap";
import ImageFilter from "./ImageFilter";
import IconButton from "./IconButton";

const ImageFilterType = ({ imageFilter, header }) => (
  <div
    className={'filter-type'}
    key="key"
  >
    <Accordion>
      <Card>
        <Accordion.Toggle
          className="accordion"
          as={Card.Header}
          eventKey="0"
        // onClick={() => handleFilter(header + "=")}
        >
          {header.replace("_", " ").replace("_", " ").replace("d", "D")}
          {" "}
          {/* <img src="/img/quickview.svg" width="40px" alt="" /> */}
          <Col className={'icon-col'}>
            <IconButton />
          </Col>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={{ paddingBottom: "0px" }}>
            <ul>
              {Object.keys(imageFilter).map((key1) => (
                <ImageFilter
                  value={imageFilter[key1]}
                  key={`${header}=${imageFilter[key1].key}`}
                  id={`${header}=${imageFilter[key1].key}`}
                // handleFilter={() =>
                //   handleFilter(header + "=" + imageFilter[key1].key)
                // }
                />
              ))}
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    <hr className={'filter-line'}></hr>
  </div>
);

ImageFilterType.propTypes = {
  imageFilter: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default ImageFilterType;
