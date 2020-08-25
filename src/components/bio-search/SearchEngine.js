import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Pagination, DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SearchResult from "./SearchResult";
import BioResultPagination from "./BioResultPagination";
import {
  fetchSearchAction,
  paginationPageSizeAction,
} from "../../store/reducer";
import './SearchResult.scss';
import NoResults from "./NoResults";
import BioMapEngine from "../bio-image-map/BioMapEngine";

const SearchEngine = ({ embed }) => {
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
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

  useEffect(() => {
    dispatch(fetchSearchAction(selectedFilter));
  }, [dispatch, selectedFilter]);

  const ShowPagination = () => (
    <div>
      <Row>
        {data.map((bioImageDocument) => (
          <SearchResult
            bioImageDocument={bioImageDocument["_source"]}
            site_id={bioImageDocument["_source"]["site_id"].value}
            key={bioImageDocument["_id"]}
            embed={embed}
          />
        ))}
         
      </Row>
      <Row className="pagination-row">
        <Pagination className="pagination">
          <div>
            <DropdownButton id="dropdown-basic-button" title={itemsPerPage + ' per page'} variant="pageitems" className="pageitems">
              <Dropdown.Item onClick={() => handlePageSizeChange(24)}>24 per page</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(48)}>48 per page</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(72)}>72 per page</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(96)}>96 per page</Dropdown.Item>
            </DropdownButton>
          </div>
          <Pagination.First onClick={(e) => changePage(1, e)}>
            First
          </Pagination.First>
          <Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>
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
          <Pagination.Next onClick={nextPage}>Next</Pagination.Next>
          <Pagination.Last onClick={(e) => changePage(pages, e)}>
            Last
          </Pagination.Last>
        </Pagination>
      </Row>
    </div>
  );

  return totalImages === 0 ? <><NoResults />  <BioMapEngine/> </> : <ShowPagination />;
};

SearchEngine.propTypes = {
  embed: PropTypes.bool,
};

SearchEngine.defaultProps = {
  embed: false,
};

export default SearchEngine;
