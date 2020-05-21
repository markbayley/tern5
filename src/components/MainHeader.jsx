import React, { Component, Fragment} from 'react';

import AboutUsDropdown from '../components/AboutUsDropdown';
import ObservatoryDropdown from '../components/ObservatoryDropdown';
import ResourcesDropdown from '../components/ResourcesDropdown';
import CommunityDropdown from '../components/CommunityDropdown';


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
                                  
                                    <AboutUsDropdown content="hello">
                                        
                                    </AboutUsDropdown></a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <ObservatoryDropdown></ObservatoryDropdown></a>
                                        <ul class="dropdown">

                                        </ul>
                                    </li>
                                    <li><a href="#">
                                       <ResourcesDropdown></ResourcesDropdown>
                                    </a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <CommunityDropdown></CommunityDropdown>
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