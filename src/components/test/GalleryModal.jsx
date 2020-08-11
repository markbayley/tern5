import React, { useState } from "react";
import { Link, scroller, animateScroll as scroll } from "react-scroll";
import { Button, Col, Row, Form, Modal, Image, Navbar } from "react-bootstrap";

function GalleryModal(props) {
  const img_url = props.value.thumbnail_url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
            <Col style={{ position: "relative", left: "230%", width: "100%" }}>
              <h5>
                Site: {props.value.site_id.label} <br />
                Image Type: {props.value.image_type.value} <br />
                Image Count: 1/{props.value.doc_count}
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
            {["radio"].map((type) => (
              <div key={props.id} className="mb-3">
                <Form.Check
                  inline
                  label="Add To Selected Images?"
                  type={type}
                  id={props.id}
                />
              </div>
            ))}
          </Form>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GalleryModal;
