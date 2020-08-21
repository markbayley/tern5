import React from "react";
// import PropTypes from "prop-types";
// import "./App.css";

// eslint-disable-next-line import/no-unassigned-import
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  hundleDateChange(startDate, endDate) {
    this.setState(() => ({
      endDate,
      startDate,
    }));
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    return (
      <>
        <div
          style={{
            // borderRight: "55px solid rgba(149, 219, 199, 0.5)",
            marginLeft: "23px",
          }}
        >
          <h6
            style={{
              paddingTop: "15px",
              color: "#065f65",
              fontWeight: "500",

            }}
          >
            Date Range
          </h6>

          <DateRangePicker
            small
            noBorder
            keepOpenOnDateSelect
            startDateAriaLabel="fff"
            startDate={startDate}
            startDateId="start_date_id"
            endDate={endDate}
            endDateId="end_date_id"
            onDatesChange={
              ({ newStartDate, newEndDate }) => this.hundleDateChange(newStartDate, newEndDate)
            }
            focusedInput={focusedInput}
            onFocusChange={(newFocusedInput) => this.setState({ focusedInput: newFocusedInput })}
          />
        </div>
        <hr
          style={{
            border: "0.5px solid #66b3a6",
            marginTop: "0%",
            marginBottom: "0%",
            marginLeft: "5px",
          }}
        />
      </>
    );
  }
}
export default DateRange;
