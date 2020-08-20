import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectedFilterAction } from "../../store/reducer";
import './SearchResult.css';

const SearchResult = ({ bioImageDocument, site_id, embed }) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  // let splitAggregation = null;
  // if (aggregation != null) {
  //   const aggreSplit = aggregation.split(".");
  //   splitAggregation = aggreSplit[0];
  // }

  const img_url_small = bioImageDocument.preview_urls[1].url;
  const img_url_large = bioImageDocument.preview_urls[0].url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleFilter = () => {
  //   const fKey = splitAggregation;
  //   const fValue = site_id;
  //   const addFilter = { [fKey]: fValue };
  //   // Add filter
  //   const updatedFilter = { ...selectedFilter, ...addFilter };
  //   dispatch(selectedFilterAction(updatedFilter));
  // };

  return (
    <Col xl={embed ? 7 : 3} lg={embed ? 7 : 6} md={embed ? 12 : 6} sm={12} xs={12}>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ paddingBottom: "10%" }}>
          <Modal.Title>
            {" "}
            <Col sm={2} style={{ position: "absolute", left: "0%" }}>
              <Navbar.Brand>
                <div className="site-branding">
                  <Link to="/">
                    <img src="/img/logo@3x.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
            </Col>
            <Col
              sm={5}
              style={{
                position: "absolute",
                right: "4%",
                textAlign: "right",
                color: "#043E4F",
              }}
            >
              <h6 style={{ textTransform: "capitalize" }}>
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
                  .replace("mgrl", "Mitchell Grass Rangeland")}{" "}
                <br />
                {bioImageDocument.image_type.value.replace(
                  "lai",
                  "Leaf Area Index"
                )}{" "}
                <br />
                Plot:{" "}
                {bioImageDocument.plot.value
                  .replace("_", " ")
                  .replace("=", " ")
                  .replace("value", " ")
                  .replace(".", " ")
                  .replace("id", " ")
                  .replace("_", " ")}{" "}
                <br />
                Date: {bioImageDocument.site_visit_id} <br />
                {/* ID: {bioImageDocumentId.slice(-8)} */}
                1/{bioImageDocument.doc_count}
              </h6>
            </Col>
          </Modal.Title>
        </Modal.Header>
        <hr
          style={{
            border: "0.5px solid #66b3a6",
            marginTop: "0%",
            marginBottom: "0.5%",
          }}
        ></hr>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <Image
                src={img_url_large}
                width="765px"
                height="465px"
                className="d-block w-100"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={img_url_large}
                width="765px"
                height="465px"
                className="d-block w-100"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={img_url_large}
                width="765px"
                height="465px"
                className="d-block w-100"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>{" "}
          <br />
          <br />
          <Form
            className="center"
            style={{ paddingTop: "5px", color: "#065f65" }}
          >
            {["checkbox"].map((type, index) => (
              // <div key={bioImageDocument.id} className="mb-3">
              <div key={index} className="mb-3">
                <Form.Check
                  inline
                  label="Add To Selected Images?"
                  type={type}
                  id={bioImageDocument.id}
                  key={index}
                />
              </div>
            ))}
          </Form>
          <p></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="flat" onClick={handleClose}>
            Close
          </Button>
          <Button variant="flat" onClick={handleClose}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>

      <Card id={site_id} style={{ border: "#fff", margin: "0px -25px 5px 0px" }}>
        <div className="hvrbox">
          <Button
            variant="flat"
            style={{ width: "100%", padding: "0px" }}
            onClick={handleShow}
          >
            <Image
              className="small_preview"
              onClick={handleShow}
              src={img_url_small}
              style={{ width: "100%", padding: "1%" }}
            />
             <Image
              className="large_preview"
              onClick={handleShow}
              src={img_url_large}
              style={{ width: "100%", padding: "1%" }}
            />
            <div className="hvrbox-layer_top">
              <div
                className="hvrbox-text"
                style={{ textTransform: "capitalize" }}
              >
                View Image?{" "}
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
                />{" "}
                <br />
                <span className="center"></span>
              </div>
            </div>{" "}
            <strong>Site:</strong> {bioImageDocument.site_id.label} <br />
            <strong>Image Type:</strong>{" "}
            {bioImageDocument.image_type.value[0].toUpperCase() +
              bioImageDocument.image_type.value.substr(1)}{" "}
                <Form
            className="center"
            style={{ paddingTop: "5px", color: "#065f65" }}
          >
            {["checkbox"].map((type, index) => (
              <div style={{ position: "absolute", top: 5, right: -3}} key={index} className="mb-`3">
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

                {/*{props.value.doc_count} */}
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
export default SearchResult;
