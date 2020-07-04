import React, { Fragment } from 'react';
import { Accordion, Card, CardTitle, Button, Col, Row } from "react-bootstrap";

import Datepicker from './Datepicker';
import IconBar from './IconBar'
import TernAPI from './test/TernAPI';
import Filter from './test/Filter';
import DatePicker from 'react-date-picker'

import {
  Form, Image
} from 'react-bootstrap';


class SideBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favourites: [],
      filters: {},
      hits: [],
      images: null,
      error: null,
      isLoading: true,
      isLoadingSearch: true,
      search: {},
      selectedFilter: {},
      aggregation: null,
      lat: -27.47,
      lng: 143.02,
      zoom: 4
    };
  }

  handleChange = (event) => {
    this.setState({
      topic: event.target.value
    })
    console.log(event.target.value)
  }


  render() {
    return (

      <Fragment >

        <Col sm="0" md="0" lg="0" xl="2" style={{ borderRight: "70px solid rgba(149, 219, 199, 0.5)", color: "#065f65", marginLeft: "0%" }} >
          <Card body style={{ border: "white" }} >

            <header style={{ textAlign: "left", fontFamily: 'museo-sans, sans-serif', fontSize: "20px", backgroundColor: "white" }}><strong>Filter</strong></header>

            <Card style={{ border: "white", textAlign: "left" }} >

              <h6 style={{ paddingTop: "10%", color: "#065f65", fontWeight: "500" }}>Site</h6>

              <Form value={this.state.selectedFilter} onChange={this.handleChange} style={{ paddingTop: "5px" }}>

                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Site One" type={type} id={`inline-${type}-1`} /><br />
                    <Form.Check inline label="Site Two" type={type} id={`inline-${type}-2`} /><br />
                    <Form.Check inline label="Site Three" type={type} id={`inline-${type}-3`} /><br />
                    <Form.Check inline label="Site Four" type={type} id={`inline-${type}-4`} />
                  </div>
                ))}
              </Form>

            </Card>
            <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

            <Card style={{ border: "white", textAlign: "left" }} >
              <h6 style={{ paddingTop: "0%", color: "#065f65", fontWeight: "500" }}>Image Type</h6>

              <Form value={this.state.selectedFilter} onChange={this.handleChange} style={{ paddingTop: "5px" }}>

                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Leaf Area Index" type={type} id={`inline-${type}-1`} /><br />
                    <Form.Check inline label="Phenocam" type={type} id={`inline-${type}-2`} /><br />
                    <Form.Check inline label="Panorama" type={type} id={`inline-${type}-3`} /><br />
                    <Form.Check inline label="Photopoint" type={type} id={`inline-${type}-4`} />
                  </div>
                ))}
              </Form>

            </Card>

            <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

            <Datepicker />

            <Card style={{ border: "white", textAlign: "left" }} >
              <h6 style={{ paddingTop: "0%", color: "#065f65", fontWeight: "500" }}>Frequency</h6>

              <Form value={this.state.selectedFilter} onChange={this.handleChange} style={{ paddingTop: "5px" }}>

                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Daily" type={type} id={`inline-${type}-1`} /><br />
                    <Form.Check inline label="Weekly" type={type} id={`inline-${type}-2`} /><br />
                    <Form.Check inline label="Monthly" type={type} id={`inline-${type}-3`} /><br />
                    <Form.Check inline label="Yearly" type={type} id={`inline-${type}-4`} />
                  </div>
                ))}
              </Form>

            </Card>

            <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

          </Card>

          <IconBar />

        </Col>

      </Fragment>
    );
  }
}

export default SideBar;

