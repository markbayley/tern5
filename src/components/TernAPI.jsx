import React, { useState } from "react";
import axios from "axios";

import {  Container, Button, FormControl, Col, Row, InputGroup } from 'react-bootstrap';



function TernAPI() {
    const [search_string, setSearch, plot, site_id, image_type, image_type_sub, site_visit_id, spatial_search,  date_from, date_to, camera_make, camera_model, _id, page_size, page_num, sort_column] = useState("");
    const [clientId, setClientId] = useState(
        ""
    );

    const [result, setResult] = useState([]);

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSubmit(event) {
        console.log(search_string);

        const url =
            "https://bioimages-test.tern.org.au/api/v1.0/search?page_num=1&query=" +
             search_string +
            "&client_id=" +
            clientId;

        axios.get(url).then((response) => {
            console.log(response);
            setResult(response.data.results);
        });
    }

    return (
        <div>
            <Container>
     
                <Row>
                    <Col>
                        {result.map((search_string) => (

                            <div>{search_string.aggregations.plot}</div>
                                          
                        ))}
                    </Col>
                </Row>

         <InputGroup inline="true" >
         
            
            <FormControl 
            onChange={handleChange} 
            id="place" 
            type="text" 
            placeholder="query" 
            className="mr-sm-2" 
            
            aria-label="search_string"
            />
            <br />
   
            <Button onClick={handleSubmit}
                     variant="outline-secondary" 
                     type="submit"

                  > Search
            </Button>
          </InputGroup>
            </Container>    
        </div>
    );
}

export default TernAPI;