import React from "react";
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from "reactstrap";

export default class CommunityDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    const { dropdownOpen } = this.state;
    return (
      <Dropdown
        className="d-inline-block"
        style={{ color: "white" }}
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onFocus={() => undefined}
        isOpen={dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle caret tag="span">
          Contact
        </DropdownToggle>
        <DropdownMenu>

          <DropdownItem>Menu Item</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Menu Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
