import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Pagination,
  DropdownButton,
  Dropdown,
  Modal,
  Carousel,
  Image,
  Col,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import SearchResult from "./SearchResult";
import BioResultPagination from "./BioResultPagination";
import { paginationPageSizeAction } from "../../store/reducer";
import "./SearchResult.scss";
import NoResults from "./NoResults";
// import BioMapEngine from "../bio-image-map/BioMapEngine";

const SearchEngine = ({ embed }) => {
  const data = useSelector((state) => state.search.hits);
  const totalImages = useSelector((state) => state.search.totalDocuments);
  const pageScroll = useSelector((state) => state.search.pagination);
  const dispatch = useDispatch();

  // if (loading) {
  //   return (
  //     <Spinner animation="border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </Spinner>
  //   );
  // }

  const itemsPerPage = pageScroll["page_size"];
  const startFrom = pageScroll["page_num"];

  const {
    pagination,
    pages,
    prevPage,
    nextPage,
    changePage,
  } = BioResultPagination({
    itemsPerPage,
    data,
    startFrom,
    totalImages,
  });

  const handlePageSizeChange = (value) => {
    dispatch(paginationPageSizeAction({ page_size: value }));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [clickedIndex, setClickedIndex] = useState(0);

  const ShowPagination = () => (
    <div>
      <Row>
        {data.map((bioImageDocument, index) => (
          <SearchResult
            bioImageDocument={bioImageDocument["_source"]}
            site_id={bioImageDocument["_source"]["site_id"].value}
            onClick={() => {
              setClickedIndex(index);
            }}
            key={bioImageDocument["_id"]}
            embed={embed}
            showCarousel={handleShow}
          />
        ))}
      </Row>
      {data && data[clickedIndex] && (
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
              <Col className="modal-info" sm={5}>
                <h6>
                  {data[clickedIndex]["_source"].site_id.label
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
                  {data[clickedIndex]["_source"].image_type.value.replace(
                    "lai",
                    "Leaf Area Index"
                  )}{" "}
                  <br />
                  Plot:{" "}
                  {data[clickedIndex]["_source"].plot.value
                    .replace("_", " ")
                    .replace("=", " ")
                    .replace("value", " ")
                    .replace(".", " ")
                    .replace("id", " ")
                    .replace("_", " ")}{" "}
                  <br />
                  Date:
                  {data[clickedIndex]["_source"].site_visit_id}
                  <br />
                  {/* ID: {data[clickedIndex]["_source"].slice(-8)} */}
                  1/
                  {data[clickedIndex]["_source"].doc_count}
                </h6>
              </Col>
            </Modal.Title>
          </Modal.Header>
          <hr className="modal-line" />
          <Modal.Body>
            <Carousel>
              {data
                .slice(clickedIndex)
                .concat(data.slice(0, clickedIndex - 1))
                .map((bioImageDocument) => (
                  <Carousel.Item>
                    <Image
                      fluid
                      className="d-block w-100"
                      src={bioImageDocument["_source"].preview_urls[0].url}
                      key={bioImageDocument["_id"]}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>

            <Form className="center modal-select">
              {["checkbox"].map((type) => (
                // <div key={bioImageDocument.id} className="mb-3">
                <div key={type} className="mb-3">
                  <Form.Check
                    inline
                    label="Add To Selected Images?"
                    type={type}
                    // id={bioImageDocument.id}
                    key={type}
                  />
                </div>
              ))}
            </Form>
          </Modal.Body>{" "}
          <br />
          <Modal.Footer>
            <Button variant="login" onClick={handleClose}>
              Close
            </Button>
            <Button variant="login" onClick={handleClose}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Row className="pagination-row">
        <Pagination className="pagination">
          <div>
            <DropdownButton
              id="dropdown-basic-button"
              title={`${itemsPerPage} per page`}
              variant="pageitems"
              className="pageitems"
            >
              <Dropdown.Item onClick={() => handlePageSizeChange(24)}>
                24 per page
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(48)}>
                48 per page
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(96)}>
                96 per page
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <Pagination.First onClick={(e) => changePage(1, e)}>
            First
          </Pagination.First>
          <Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>
          <div className="mobile-pagination">
            {pagination.map((page) => {
              if (!page.ellipsis) {
                return (
                  <div key={page.id} className="pagelink">
                    <Pagination.Item
                      key={page.id}
                      active={!!page.current}
                      onClick={(e) => changePage(page.id, e)}
                    >
                      {page.id}
                    </Pagination.Item>
                  </div>
                );
              }
              return <Pagination.Ellipsis key={page.id} />;
            })}
          </div>
          <Pagination.Next onClick={nextPage}>Next</Pagination.Next>
          <Pagination.Last onClick={(e) => changePage(pages, e)}>
            Last
          </Pagination.Last>
        </Pagination>
      </Row>
    </div>
  );

  return totalImages === 0 ? <NoResults /> : <ShowPagination />;
};

SearchEngine.propTypes = {
  embed: PropTypes.bool,
};

SearchEngine.defaultProps = {
  embed: false,
};

export default SearchEngine;
