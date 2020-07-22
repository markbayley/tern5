import React from "react";
import { Row } from "react-bootstrap";
import SearchResult from "./SearchResult";

const SearchEngine = ({ bioImageDocuments, aggregation, onBioImageClick }) => {
  return (
    <Row>
      {Object.keys(bioImageDocuments).map((index, value) => (
        <SearchResult
          bioImageDocument={bioImageDocuments[index]}
          bioImageDocumentId={aggregation + "=" + index}
          key={index + value}
          onBioImageClick={(i) => onBioImageClick(i)}
        />
      ))}
    </Row>
  );
};

export default SearchEngine;
