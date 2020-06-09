import React, { useState } from "react";
import { Container, Row, Col, Button } from 'reactstrap';

import MapBox from "./MapBox";
import MapSearch from "./MapSearch";
import Api from './Api'
import { Map } from "leaflet";

import SideBar from './SideBar';




const State = () => {
    const searchmodes = ["map", "filter"];
    const [mySearch, setMySearch] = useState("");

  
    const [open, setOpen] = useState(false);
    
        
    return (
        <>
           
            <div className="row w-100" >
                <div className="col mb-3 col-12 text-center" >

                 <div className="col text-center" >
                 

                    <p >
                        {mySearch === "map" && (
                            <div>
                           
                           <MapSearch />
                            
                              </div>
                      
                        )}
                        {mySearch === "filter" && (
                         <div>
                               <MapBox>
                                  <SideBar />
                              </MapBox>
                          
                            </div>
                       
                        )}
                    
                    </p>
                </div>
                  
                    <br />
                  
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="toggle"
                        m
                    >
                        {searchmodes.map(searchmode => (
                            <Button style={{fontWeight: "100", color: "#065f65", borderColor: "1px solid #065f65"}}
                        
                              
                                type="button"
                                key={searchmode}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMySearch(searchmode)}
                            >
                                {searchmode.toLocaleUpperCase()}
                            </Button>
                        ))}
                    </div>

                </div>


               
            </div>
        </>
    );
};


export default State;