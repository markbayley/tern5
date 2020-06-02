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
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black", width: "100%" }}>
            <p style={{ float: "left" }}>Date Picker</p> <div style={{ float: 'right' }}><i class="fa fa-plus" aria-hidden="true"></i></div>
          </Accordion.Toggle>
          <DatePicker
            
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </Card.Header>
        <hr style={{ border: '1px solid #95dbc7' }}></hr>
      </Fragment>
    );
  }
}

export default Datepicker;  