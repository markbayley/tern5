import React, { useState } from "react";
import { Card, Button, Col, Form, Modal, Image } from "react-bootstrap";
const SearchResult = ({
  bioImageDocument,
  bioImageDocumentId,
  onBioImageClick,
}) => {
  const img_url = bioImageDocument.thumbnail_url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col xl={3}>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            Site: {bioImageDocument.site_id.label} <br />
            Image Type: {bioImageDocument.image_type.value} <br />
            Image Count: {bioImageDocument.doc_count}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Image src={img_url} width="765px" height="465px" />
          <br />
          <br />
          <br />
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
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

      <Card id={bioImageDocumentId} style={{ marginTop: "5%" }}>
        <div className="hvrbox">
          <Button
            variant="outline-secondary"
            style={{ width: "100%" }}
            onClick={() => onBioImageClick(bioImageDocumentId)}
          >
            <Image
              className="hvrbox-layer_bottom"
              onClick={handleShow}
              src={img_url}
              style={{ width: "400px", height: "210px" }}
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">
                Search These Images?
                <br />
                <img src="/img/stack.png" alt="stack" width="100px" /> <br />
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
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`inline-${type}-1`}
                inline
                label="View"
              />
              <Form.Check
                inline
                label="Select"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Download"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>
      </Card>
    </Col>
  );
};
export default SearchResult;
