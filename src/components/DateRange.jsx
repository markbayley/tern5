import React from "react";
import PropTypes from "prop-types";
//import "./App.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class DateRange extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    endDateFormatted: null,
    startDateFormatted: null,
  };
  hundleDateChange(startDate, endDate) {
    this.setState(() => ({
      endDate,
      startDate,
    }));
    if (startDate != null) {
      this.setState(() => ({
        startDateFormatted: startDate.format("D-MM-Y"),
      }));
    }
    if (endDate != null) {
      this.setState(() => ({
        endDateFormatted: endDate.format("D-MM-Y"),
      }));
    }
  }

  render() {
    return (
    <>
      <div  style={{borderRight: "55px solid rgba(149, 219, 199, 0.5)", marginLeft: "30px"}}>
        <h6 
          style={{ paddingTop: "10%", color: "#065f65", fontWeight: "500", paddingLeft: "40px" }}
        > 
          Date Range
        </h6>

        

        <DateRangePicker
          small={PropTypes.bool}
          noBorder={PropTypes.bool}
          startDateAriaLabe="fff"
          keepOpenOnDateSelect="true"
          startDate={this.state.startDate}
          startDateId="start_date_id"
          endDate={this.state.endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            this.hundleDateChange(startDate, endDate)
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
       
      </div>
   <hr 
   style={{
     border: "0.5px solid #66b3a6",
     marginTop: "0%",
     marginBottom: "0.5%",
     marginLeft: "5px"
   }}
 ></hr>


 
 </>
    );
  }
}
export default DateRange;
