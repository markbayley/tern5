import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ResourcesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  
  
  render() {
    return (
      <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  caret tag="span"
       
      >
          Tools & Resources 
        </DropdownToggle>
        <DropdownMenu>
      
          <DropdownItem>Menu Item</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Menu Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}