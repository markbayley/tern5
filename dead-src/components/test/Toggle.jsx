import React, { useState } from "react";
import { Button } from 'reactstrap';

import MapBox from "./MapBox";
import MapSearch from "../MapSearch";



import SideBar from '../SideBar';




const Toggle = () => {
    const searchmodes = ["map", "filter"];
    const [mySearch, setMySearch] = useState("");

  
   
    
        
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
                        
                    >
                        {searchmodes.map(searchmode => (
                            <Button style={{fontWeight: "100", color: "#065f65", borderColor: "1px solid #065f65"}}
                        
                              
                                type="button"
                                key={searchmode}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMySearch(searchmode)}
                            >
                             hi   {searchmode.toLocaleUpperCase()}
                            </Button>
                        ))}
                    </div>

                </div>


               
            </div>
        </>
    );
};


export default Toggle;