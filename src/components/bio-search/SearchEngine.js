import React from "react";
import { Row, Spinner, Pagination } from "react-bootstrap";
import SearchResult from "./SearchResult";
import { useSelector, useDispatch } from "react-redux";
import BioResultPagination from "./BioResultPagination";
import { fetchSearchAction } from "../../store/reducer";

const SearchEngine = ({embed}) => {
  const loading = useSelector((state) => state.search.isLoadingSearch);
  const data = useSelector((state) => state.search.hits);
  const totalImages = useSelector((state) => state.search.totalDocuments);
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  const dispatch = useDispatch();

  //console.log("totalImages=", totalImages);
  //console.log("data=", data);

  // if (loading) {
  //   return (
  //     <Spinner animation="border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </Spinner>
  //   );
  // }

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
            embed={embed}
          />
        ))}
      </Row>
     
      <Row className={'pagination-row'}>
        <Pagination className={'pagination'}>
          <Pagination.First onClick={(e) => changePage(1, e)} >First</Pagination.First>
          <Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>
          {pagination.map((page) => {
            if (!page.ellipsis) {
              return (
                <div className={'pagelink'} >
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
          <Pagination.Next onClick={nextPage} >Next</Pagination.Next>
          <Pagination.Last onClick={(e) => changePage(pages, e)}>Last</Pagination.Last>
        </Pagination>
      </Row>
    
    </div>
  );
};

export default SearchEngine;
