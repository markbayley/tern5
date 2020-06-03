import React, { Component, Fragment} from 'react';

import TERNDataDropdown from '../components/TERNDataDropdown';
import DataVisualiserDropdown from '../components/DataVisualiserDropdown';
import CoESRADropdown from '../components/CoESRADropdown';
import CommunityDropdown from '../components/CommunityDropdown';


class BioimagesMenu extends Component {
    render() {

        return (
            <Fragment >
                             
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
                                  
                                    <TERNDataDropdown content="hello">
                                        
                                    </TERNDataDropdown></a>
                                        <ul class="dropdown">


                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <DataVisualiserDropdown></DataVisualiserDropdown></a>
                                        <ul class="dropdown">

                                        </ul>
                                    </li>
                                    <li><a href="#">
                                       <CoESRADropdown></CoESRADropdown>
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
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    }
}


export default BioimagesMenu;