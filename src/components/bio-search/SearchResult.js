import React, { useState } from "react";
import { Card, Button, Col, Form, Modal, Image, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
const SearchResult = ({
  bioImageDocument,
  bioImageDocumentId,
  handleFilter,
  key,
}) => {
  // console.log("KEY IS:" + key);
  // console.log("bioMageDocumentId:" + bioImageDocumentId);

  const img_url = bioImageDocument.thumbnail_url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #fff;
      color:  #00565D;
      border: 1px solid #00565D;
    }
    .btn-flat:hover {
      background-color: #00565D;
      color:  #fff;
      border: 1px solid #00565D;
    }
    
    `}
      </style>

      <Col xl={3}>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <Col sm={2} style={{ position: "absolute", left: "0%" }}>
                <Navbar.Brand>
                  <div className="site-branding">
                    <Link to="/">
                      <img src="img/logo@3x.png" alt="" />
                    </Link>
                  </div>
                </Navbar.Brand>
              </Col>
              <Col
                style={{ position: "relative", left: "230%", width: "100%" }}
              >
                <h5>
                  Site: {bioImageDocument.site_id.label} <br />
                  Image Type: {bioImageDocument.image_type.value} <br />
                  Image Count: {bioImageDocument.doc_count}
                </h5>
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
            {" "}
            <Image src={img_url} width="765px" height="465px" />
            <br />
            <br />
            <Form
              className="center"
              style={{ paddingTop: "5px", color: "#065f65" }}
            >
              {["checkbox"].map((type, index) => (
                <div key={bioImageDocument.id} className="mb-3">
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
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus.
            </p>
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

        <Card
          id={bioImageDocumentId}
          style={{ marginTop: "5%", border: "#fff" }}
        >
          <div className="hvrbox">
            <Button
              variant="flat"
              style={{ width: "100%", padding: "0px" }}
              onClick={() => handleFilter(bioImageDocumentId)}
            >
              <Image
                className="hvrbox-layer_bottom"
                onClick={handleShow}
                src={img_url}
                style={{ width: "100%", height: "210px" }}
              />
              <div className="hvrbox-layer_top">
                <div className="hvrbox-text">
                  Search These Images?
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
              <strong>Image Count:</strong> {bioImageDocument.doc_count}{" "}
            </Button>
          </div>

          <Form
            className="center"
            style={{ paddingTop: "5px", color: "#065f65" }}
          >
            {["checkbox"].map((type) => (
              <div key={bioImageDocument.id} className="mb-3">
                <Form.Check
                  type={type}
                  id={bioImageDocument.id}
                  inline
                  label="View"
                  onClick={handleShow}
                />
                <Form.Check
                  inline
                  label="Select"
                  type={type}
                  id={bioImageDocument.id}
                />
                <Form.Check
                  inline
                  label="Download"
                  type={type}
                  id={bioImageDocument.id}
                />

                {/*{props.value.doc_count} */}
              </div>
            ))}
          </Form>
        </Card>
      </Col>
    </>
  );
};
export default SearchResult;
