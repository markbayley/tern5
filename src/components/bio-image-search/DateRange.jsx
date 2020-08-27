/* eslint import/no-unassigned-import: "off" */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import moment from "moment";
import { selectedFilterAction } from "../../store/reducer";

const DateRange = () => {
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null,
  });
  const [focus, setFocus] = useState(null);

  const { start, end } = dateRange;

  const handleOnDateChange = ({ startDate, endDate }) => {
    if (startDate) {
      const sRange = { ...dateRange, ...{ start: startDate } };
      setDateRange(sRange);
    }
    if (endDate) {
      const sRange = { ...dateRange, ...{ end: endDate } };
      setDateRange(sRange);
    }
  };

  useEffect(() => {
    if (dateRange.start && dateRange.end) {
      // Note: start and end are Moment types, so need to convert for API
      const dateFrom = dateRange.start.format("YYYY-MM-DD");
      const dateTo = dateRange.end.format("YYYY-MM-DD");
      const dateRangeSearch = { date_from: dateFrom, date_to: dateTo };
      dispatch(selectedFilterAction(dateRangeSearch));
    }
  }, [dateRange, dispatch]);

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
          // showClearDates
          keepOpenOnDateSelect
          startDateAriaLabel="fff"
          startDate={start}
          startDateId="start_date_id"
          endDate={end}
          endDateId="end_date_id"
          onDatesChange={handleOnDateChange}
          focusedInput={focus}
          onFocusChange={(focusV) => setFocus(focusV)}
          startDatePlaceholderText="Start"
          endDatePlaceholderText="End"
          numberOfMonths={2}
          isOutsideRange={() => false}
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
};

export default DateRange;
