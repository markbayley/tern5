import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

class AboveHeader extends Component {
  render() {
    return (
  

      <div class="above-header container-fluid">
        <div class="container">
          <div class="row above-header-section-wrap justify-content-end">
            <div class="above-header-section above-header-section-1 align-middle d-flex">
              <a href="https://www.tern.org.au/"><img
                src="img/logo-mini-all.png"
                alt="" /></a>
            </div>
            <div class="above-header-section above-header-section-2 align-middle d-flex">
              <span>
                <img src="img/search-icon@2x.png" />
                <a href="https://portal.tern.org.au/" target="_blank" class="btn-orange">Data</a>
              </span>
            </div>
          </div>
        </div>
      </div>

     

    );
  }
}


export default AboveHeader;