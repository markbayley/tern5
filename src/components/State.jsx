import React, { useState } from "react";
import { Container, Row, Col } from 'reactstrap';

import MapBox from "./MapBox";
import MapSearch from "./MapSearch";



const State = () => {
    const searchmodes = ["map", "filter"];
    const [mySearch, setMySearch] = useState("");

    return (
        <>
           
            <div className="row w-100" >
                <div className="col mb-3 col-12 text-center" >

                 <div className="col text-center" >
                 

                    <p >
                        {mySearch === "map" && (
                          
                         
                            <MapSearch />
                      
                        )}
                        {mySearch === "filter" && (
                        
                            <MapBox />
                       
                        )}
                    
                    </p>
                </div>
                  
                    <br />
                  
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                        m
                    >
                        {searchmodes.map(searchmode => (
                            <button
                                type="button"
                                key={searchmode}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMySearch(searchmode)}
                            >
                                {searchmode.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>

                </div>


               
            </div>
        </>
    );
};


export default State;