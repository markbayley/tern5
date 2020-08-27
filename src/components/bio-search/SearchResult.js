import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  Col,
  Form,
  Modal,
  Image,
  Navbar,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-scroll";

import "./SearchResult.scss";

const SearchResult = ({ bioImageDocument, site_id, embed, showCarousel }) => {
  const img_url_small = bioImageDocument.preview_urls[1].url;
  const img_url_large = bioImageDocument.preview_urls[0].url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col xl={embed ? 7 : 2} lg={embed ? 7 : 3} md={embed ? 12 : 4} sm={12} xs={12}>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>
            {" "}
            <Col sm={2} className="modal-column">
              <Navbar.Brand>
                <div className="site-branding">
                  <Link to="/">
                    <img src="/img/logo@3x.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
            </Col>
            <Col
              className="modal-info"
              sm={5}
            >
              <h6>
                {bioImageDocument.site_id.label
                  .replace("_", " ")
                  .replace("=", " ")
                  .replace("value", " ")
                  .replace(".", " ")
                  .replace("id", " ")
                  .replace("_", " ")
                  .replace("alic", "Alice Mulga")
                  .replace("capetrib", "Cape Tribulation")
                  .replace("cblp", "Cumberland Plain")
                  .replace("clpm", "Calperum Mallee")
                  .replace("fnqr robson", "Robson Creek")
                  .replace("gwwl", "Great Western Woodlands")
                  .replace("lfld", "Litchfield")
                  .replace("mgrl", "Mitchell Grass Rangeland")}
                {" "}
                <br />
                {bioImageDocument.image_type.value.replace(
                  "lai",
                  "Leaf Area Index",
                )}
                {" "}
                <br />
                Plot:
                {" "}
                {bioImageDocument.plot.value
                  .replace("_", " ")
                  .replace("=", " ")
                  .replace("value", " ")
                  .replace(".", " ")
                  .replace("id", " ")
                  .replace("_", " ")}
                {" "}
                <br />
                Date:
                {" "}
                {bioImageDocument.site_visit_id}
                <br />
                {/* ID: {bioImageDocumentId.slice(-8)} */}
                1/
                {bioImageDocument.doc_count}
              </h6>
            </Col>
          </Modal.Title>
        </Modal.Header>
        <hr className="modal-line" />
        <Modal.Body>
    
          {" "}
          <br />

          <Form className="center modal-select">
            {["checkbox"].map((type) => (
              // <div key={bioImageDocument.id} className="mb-3">
              <div key={type} className="mb-3">
                <Form.Check
                  inline
                  label="Add To Selected Images?"
                  type={type}
                  id={bioImageDocument.id}
                  key={type}
                />
              </div>
            ))}
          </Form>
          <p />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="login" onClick={handleClose}>
            Close
          </Button>
          <Button variant="login" onClick={handleClose}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>

      <Card id={site_id} className="image-card">
        <div className="hvrbox">
          <Button
            variant="flat image-card-button"
            onClick={showCarousel}
          >
            {/* <div style={{width: "100%", height: "0", paddingTop: "56%", backgroundImage: `url(${img_url_small})`}}>


            </div> */}
            <Image
              fluid
              className="small_preview"
              onClick={handleShow}
              src={img_url_small}
              
            /> 
             <Image
              fluid
              className="large_preview"
              onClick={handleShow}
              src={img_url_large}
            />
            <div className="hvrbox-layer_top">
              <div
                className="hvrbox-text"
              >
                View Image?
                {" "}
                {/* {site_id.replace("_", " ")
                  .replace("=", " ")
                  .replace("value", " ")
                  .replace(".", " ")
                  .replace("id", " ")
                  .replace("_", " ")
                  .replace("alic", "Alice Mulga")
                  .replace("capetrib", "Cape Tribulation")
                  .replace("cblp", "Cumberland Plain")
                  .replace("clpm", "Calperum Mallee")
                  .replace("fnqr robson", "Robson Creek")
                  .replace("gwwl", "Great Western Woodlands")
                  .replace("lfld", "Litchfield")
                  .replace("mgrl", "Mitchell Grass Rangeland")
                  .replace("lai ", "Leaf Area Index")} */}

                <br />
                <img
                  src="/img/icons/Bioimages icon.svg"
                  alt="bioimages icon"
                  width="100px"
                />
                {" "}
                <br />
                <span className="center" />
              </div>
            </div>
            {" "}
            <div className="thumbnail-text">
              {/* <strong>Site:</strong>  */}
              {bioImageDocument.site_id.label}
              <br />
              {/* <strong>Image Type:</strong> */}
              {" "}
              {bioImageDocument.image_type.value[0].toUpperCase()
                + bioImageDocument.image_type.value.substr(1)}
              {" "}
              <img
                src="/img/phenocam.svg"
                width="20px"
                alt="phenocam"
                style={{
                  border: ".5px solid orange", borderRadius: "20px", padding: "2px", marginBottom: "5px",
                }}
              />
            </div>
            <Form className="center image-form">
              {["checkbox"].map((type) => (
                <div className="image-checkbox" key={type}>
                  {/* <Form.Check
                  type={type}
                  id={bioImageDocument.id}
                  inline
                  label="View"
                  onClick={handleShow}
                /> */}
                  <Form.Check
                    inline
                    type={type}
                    id={bioImageDocument.id}
                  />
                  {/* <Form.Check
                  inline
                  label="Download"
                  type={type}
                  id={bioImageDocument.id}
                /> */}

                  {/* {props.value.doc_count} */}
                </div>
              ))}
            </Form>
            {/* <strong>Image Count:</strong> {bioImageDocument.doc_count}{" "}  */}
            {/* <strong>Plot:</strong> {bioImageDocument.plot.value}{" "} */}
            {/* <strong>Visit:</strong> {bioImageDocument.site_visit_id}{" "} */}
          </Button>
        </div>

      </Card>
    </Col>
  );
};

SearchResult.propTypes = {
  bioImageDocument: PropTypes.objectOf(PropTypes.any).isRequired,
  site_id: PropTypes.string.isRequired,
  embed: PropTypes.bool,
};

SearchResult.defaultProps = {
  embed: false,
};

export default SearchResult;
