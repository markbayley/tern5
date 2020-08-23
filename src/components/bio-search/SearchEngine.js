import React, { useEffect } from "react";
import {
  Row,
  Spinner,
  Pagination,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import SearchResult from "./SearchResult";
import { useSelector, useDispatch } from "react-redux";
import BioResultPagination from "./BioResultPagination";
import {
  fetchSearchAction,
  paginationPageSizeAction,
} from "../../store/reducer";

const SearchEngine = ({ embed }) => {
  const loading = useSelector((state) => state.search.isLoadingSearch);
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
  }, [selectedFilter]);

  return (
    <div>
      <Row>
        {data.map((bioImageDocument) => (
          <SearchResult
            bioImageDocument={bioImageDocument["_source"]}
            site_id={bioImageDocument["_source"]["site_id"]["value"]}
            key={bioImageDocument["_id"]}
            embed={embed}
          />
        ))}
      </Row>

      <Row className={"pagination-row"}>
        <Pagination className={"pagination"}>
          <div>
            <DropdownButton id="dropdown-basic-button" title={itemsPerPage + ' per page'}>
              <Dropdown.Item onClick={() => handlePageSizeChange(32)}>32(default)</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(50)}>50</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(75)}>75</Dropdown.Item>
              <Dropdown.Item onClick={() => handlePageSizeChange(100)}>100</Dropdown.Item>
            </DropdownButton>
          </div>
          <Pagination.First onClick={(e) => changePage(1, e)}>
            First
          </Pagination.First>
          <Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>
          {pagination.map((page) => {
            if (!page.ellipsis) {
              return (
                <div key={page.id} className={"pagelink"}>
                  <Pagination.Item
                    key={page.id}
                    active={page.current ? true : false}
                    onClick={(e) => changePage(page.id, e)}
                  >
                    {page.id}
                  </Pagination.Item>
                </div>
              );
            } else {
              return <Pagination.Ellipsis key={page.id} />;
            }
          })}
          <Pagination.Next onClick={nextPage}>Next</Pagination.Next>
          <Pagination.Last onClick={(e) => changePage(pages, e)}>
            Last
          </Pagination.Last>
        </Pagination>
      </Row>
    </div>
  );
};

export default SearchEngine;
