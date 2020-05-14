import React, { Component } from 'react';

class AboveHeader extends Component {
  render() {
    return (

      <div class="above-header">
        <div class="container">
          <div class="above-header-section-wrap d-flex">
            <div class="above-header-section above-header-section-1">
              <div class="user-select">
                <div class="ast-custom-html"><a href="#"><img src="img/logo-mini-all.png" alt="" /></a></div>
              </div>
            </div>

            <div class="above-header-section above-header-section-2">
              <div class="user-select">
                <div class="ast-custom-html"><a href="#" target="_blank" class="btn-orange">Data</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default AboveHeader;