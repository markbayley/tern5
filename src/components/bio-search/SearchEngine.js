import React from "react";
import { Row } from "react-bootstrap";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

const SearchEngine = () => {
  const bioImageDocuments = useSelector((state) => state.search.hits);
  const aggregation = useSelector((state) => state.search.aggregation);

  return (
    <Row>
      {Object.keys(bioImageDocuments).map((site_id) => (
        <SearchResult
          bioImageDocument={bioImageDocuments[site_id]}
          aggregation={aggregation}
          site_id={site_id}
          key={site_id}
        />
      ))}
    </Row>
  );
};

export default SearchEngine;
