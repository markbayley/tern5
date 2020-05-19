import React, { Component, Fragment} from 'react';

import DropDown from '../components/DropDown';

const name = () => name;

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
                                  
                                    <DropDown 
                                       name="Community" 
                                      >
                                    </DropDown></a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <DropDown></DropDown></a>
                                        <ul class="dropdown">

                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <DropDown></DropDown>
                                    </a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <DropDown></DropDown>
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