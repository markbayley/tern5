import React from 'react';

import {DropdownButton, DropdownItem } from 'react-bootstrap';


class ImageType extends React.Component {
  render() {
    return (

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <DropdownItem href="#/action-1">Action</DropdownItem>
        <DropdownItem href="#/action-2">Another action</DropdownItem>
        <DropdownItem href="#/action-3">Something else</DropdownItem>
      </DropdownButton>
    );
  }
}

export default ImageType;  