import React, { Component, Fragment} from 'react';

import TERNDataDropdown from '../components/TERNDataDropdown';
import DataVisualiserDropdown from '../components/DataVisualiserDropdown';
import CoESRADropdown from '../components/CoESRADropdown';
import CommunityDropdown from '../components/CommunityDropdown';




class BioMenu extends Component {
    render() {

        return (
            <Fragment >
                             
                <div class="main-header" style={{ border: "1px solid red", height: "60px"}}>
                    <div class="container" >
                        <div class="main-header-container d-flex"  style={{border: "1px solid white", height: "60px"}}>
                        
                            <div class="main-header-bar-navigation"  style={{marginRight: "20%", border: "2px solid green", height: "60px"}}>
                            
                                <ul id="primary-menu" class="main-header-menu d-flex" style={{border: "1px solid blue", height: "60px"}}>
                                    <li><a href="#">
                                  
                                    <TERNDataDropdown content="hello"  >
                                        
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


export default BioMenu;