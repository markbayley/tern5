import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchSearchAction } from "../../store/redux";

const FilterHeader = (props) => {
  const resetFilter = () => {
    console.log("Firing.. reseting Filter!!");
    props.resetFilter(fetchSearchAction({}));
  };
  return (
    <h5
      style={{
        color: "#fff",
        backgroundColor: "#ED694B",
        padding: "20px 10px 20px 10px",
        marginBottom: "1px",
      }}
    >
      {/* Filter Reset <ResetFilter resetFilter={resetFilter} /> */}
      Filter Reset
      <Button
        style={{ padding: "0px 3px 0px 3px", float: "right" }}
        variant="reset"
        size="sm"
        onClick={resetFilter}
      >
        <img src="/img/icons/reset-icon-white.png" alt="reset" width="30px" />
      </Button>
    </h5>
  );
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    resetFilter: (action) => dispatch(action),
  };
};
const ConnectedFilterHeader = connect(null, mapDispatchToProps)(FilterHeader);
export default ConnectedFilterHeader;
