import React, { Fragment } from "react";
import DatePicker from "react-datepicker";
import { Accordion, Card, Button } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

class Datepicker extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <Fragment>
        <Card.Header style={{backgroundColor: "white"}}>
          <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black", paddingLeft: "0%" }}>
            <p style={{ float: "left", paddingTop: "10%"}}>Date Picker</p> <div style={{ paddingTop: "10%" }}></div>
          </Accordion.Toggle>
          <DatePicker
            
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </Card.Header>
        <hr style={{ border: '1.5px solid #95dbc7', marginTop: "0%" }}></hr>
      </Fragment>
    );
  }
}

export default Datepicker;  