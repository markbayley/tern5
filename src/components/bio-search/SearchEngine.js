import React from "react";
import { Row } from "react-bootstrap";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

const SearchEngine = () => {
  const bioImageDocuments = useSelector((state) => state.search.hits);
  //const aggregation = useSelector((state) => state.search.aggregation);

  // console.log("In SearchEngine. bioImageDocuments=", bioImageDocuments);
  // return (
  //   <Row>
  //     {bioImageDocuments.map((bioImageDocument) => (
  //       <SearchResult
  //         bioImageDocument={bioImageDocument['_source']}
  //         aggregation={aggregation}
  //         site_id={bioImageDocument["_source"]["site_id"]["value"]}
  //         key={bioImageDocument['_id']}
  //       />
  //     ))}
  //   </Row>
  // );
  return (
    <Row>
      {bioImageDocuments.map((bioImageDocument) => (
        <SearchResult
          bioImageDocument={bioImageDocument["_source"]}
          site_id={bioImageDocument["_source"]["site_id"]["value"]}
          key={bioImageDocument["_id"]}
        />
      ))}
    </Row>
  );
};

export default SearchEngine;
