import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import ImageFilter from "./ImageFilter";

const ImageFilterType = ({ imageFilter, header }) => {
  // console.log("header:", header);
  // console.log("imageFilter", imageFilter);
  return (
    <div style={{ marginLeft: "1%" }} key="key">
      <Accordion>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            style={{
              backgroundColor: "#fff",
              borderRight: "55px solid rgba(149, 219, 199, 0.5)",
            }}
          >
            <Button
              style={{
                width: "105%",
                textTransform: "capitalize",
                color: "#065f65",
                fontWeight: "500",
              }}
              variant="outline"
            >
              {header.replace("_", " ").replace("_", " ").replace("d", "D")}{" "}
              <img src="/img/quickview.svg" width="40px" alt="" />
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                {Object.keys(imageFilter).map((key1) => (
                  <ImageFilter
                    value={imageFilter[key1]}
                    key={header + "=" + imageFilter[key1].key}
                    id={header + "=" + imageFilter[key1].key}
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
      <hr
        style={{
          border: "0.5px solid #66b3a6",
          marginTop: "0%",
          marginBottom: "0.5%",
        }}
      ></hr>
    </div>
  );
};

export default ImageFilterType;
