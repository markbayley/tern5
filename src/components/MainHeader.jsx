import React, { Component, Fragment } from 'react';

import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';


class MainHeader extends Component {
    render() {
        return (
            <Fragment>

                <div class="main-header">
                    <div class="container">
                        <div class="main-header-container d-flex">
                            <div class="site-branding">
                                <a href="#"><span><img src="img/logo@3x.png" alt="" /></span></a>
                            </div>
                            <div class="main-header-bar-navigation">
                                <input class="menu-btn" type="checkbox" id="menu-btn" />
                                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                                <ul id="primary-menu" class="main-header-menu d-flex">
                                    <li><a href="#">
                                        <Dropdown autoOpen>
                                            <Dropdown.Toggle title="About" style={{ fontSize: "18px", border: "none", color: "#0f3540;" }} />
                                            <Dropdown.Menu>
                                                <MenuItem>
                                                    Menu item one
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item two
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item three
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item four
                                                </MenuItem>
                                            </Dropdown.Menu>
                                        </Dropdown></a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <Dropdown autoOpen>
                                            <Dropdown.Toggle title="TERN Observatory" style={{ fontSize: "18px", border: "none", color: "#0f3540;" }} />
                                            <Dropdown.Menu>
                                                <MenuItem>
                                                    Menu item one
                                               </MenuItem>
                                                <MenuItem>
                                                    Menu item two
                                               </MenuItem>
                                                <MenuItem>
                                                    Menu item three
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item four
                                               </MenuItem>
                                            </Dropdown.Menu>
                                        </Dropdown></a>
                                        <ul class="dropdown">

                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <Dropdown autoOpen>
                                            <Dropdown.Toggle title="Tools & Resources" style={{ fontSize: "18px", border: "none", color: "#0f3540;" }} />
                                            <Dropdown.Menu>
                                                <MenuItem>
                                                    Menu item one
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item two
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item three
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item four
                                               </MenuItem>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <Dropdown autoOpen>
                                            <Dropdown.Toggle title="Community" style={{ fontSize: "18px", border: "none", color: "#0f3540;" }} />
                                            <Dropdown.Menu>
                                                <MenuItem>
                                                    Menu item one
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item two
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item three
                                                </MenuItem>
                                                <MenuItem>
                                                    Menu item four
                                                </MenuItem>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </a>
                                        <ul class="dropdown">

                                        </ul>
                                    </li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    }
}


export default MainHeader;