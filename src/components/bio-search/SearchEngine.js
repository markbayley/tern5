import React, { useEffect } from "react";
import { Row, Spinner, Pagination } from "react-bootstrap";
import SearchResult from "./SearchResult";
import { useSelector, useDispatch } from "react-redux";
import BioResultPagination from "./BioResultPagination";
import { fetchSearchAction } from "../../store/reducer";

const SearchEngine = () => {
  const data = useSelector((state) => state.search.hits);
  const totalImages = useSelector((state) => state.search.totalDocuments);
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  const loading = useSelector((state) => state.search.isLoadingSearch);
  const dispatch = useDispatch();
  console.log("totalImages=", totalImages);
  console.log("data=", data);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  const itemsPerPage = selectedFilter["page_size"];
  const startFrom = selectedFilter["page_num"];

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

  // useEffect(() => {
  //   console.log("in useEffect(). selectedFilter=", selectedFilter);
  //   dispatch(fetchSearchAction(selectedFilter));
  // }, []);

  return (
    <div>
      <Row >
        {data.map((bioImageDocument) => (
          <SearchResult
            bioImageDocument={bioImageDocument["_source"]}
            site_id={bioImageDocument["_source"]["site_id"]["value"]}
            key={bioImageDocument["_id"]}
          />
        ))}
      </Row>
      <Row style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '30px', paddingTop: "15px"}}>
        <Pagination className={'pagination'}>
          <Pagination.First onClick={(e) => changePage(1, e)} />
          <Pagination.Prev onClick={prevPage} />
          {pagination.map((page) => {
            if (!page.ellipsis) {
              return (
                <Pagination.Item    
                  key={page.id}
                  active={page.current ? true : false}
                  onClick={(e) => changePage(page.id, e)}
                >
                  {page.id}
                </Pagination.Item>
              );
            } else {
              return <Pagination.Ellipsis key={page.id} />;
            }
          })}
          <Pagination.Next onClick={nextPage} />
          <Pagination.Last onClick={(e) => changePage(pages, e)} />
        </Pagination>
      </Row>
    
    </div>
  );
};

export default SearchEngine;
