import React, { useState } from 'react'
import { Input } from 'antd';
import { Container, Button, FormControl, InputGroup, Navbar, Image, Form, Modal } from 'react-bootstrap';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div className="searchbar " style={{margin: '0rem auto', height: "60px"}} >
                <Image fluid src="/images/search-bioimages-icon.svg" alt="bioimages search icon"
                    style={{
                      width: "6.5%",
                      marginLeft: "3%"
                    }} />  
                 
            <Search 
               id="place"
               size="large"
          
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Search images by region or by site"
                style={{ fontSize: "25px", color: "#00565D", marginTop: "12px", width: "380px", marginLeft: '1%' }}
            />
        </div>
    )
}

export default SearchFeature
 