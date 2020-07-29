import React from "react";
import { Row } from "react-bootstrap";
import SearchResult from "./SearchResult";

const SearchEngine = ({ bioImageDocuments, aggregation, handleFilter }) => {
  return (
    <Row>
      {Object.keys(bioImageDocuments).map((index) => (
        <SearchResult
          bioImageDocument={bioImageDocuments[index]}
          bioImageDocumentId={aggregation + "=" + index}
          key={index}
          handleFilter={handleFilter}
        />
      ))}
    </Row>
  );
};

export default SearchEngine;
