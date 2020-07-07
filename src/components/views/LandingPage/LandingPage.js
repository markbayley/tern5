import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Card, Col, Row } from 'antd';
//import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import Ancillary from './Sections/Ancillary';
import { continents, price, sites, types } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import { Container, Button, FormControl, InputGroup, Navbar, Image, Form, Modal } from 'react-bootstrap';

import LoginButton from '../../buttons/LoginButton';
import RegisterButton from '../../buttons/RegisterButton';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ImageType from './Sections/ImageType';
import MapSearch from '../../MapSearch';





const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        continents: [],
        price: [],
        sites: [],
        types: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card style={{ marginLeft: "10%" }}
                hoverable={true}

                cover={<a href={`/product/${product._id}`} > </a>}
            >
                <Meta
                    title={product.title}
                   
                />
            </Card>
        </Col>
    })


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return (
        <Router>
        <div style={{ width: '95%', margin: '-1.5rem auto' }}>


            <Row style={{ borderBottom: "1.5px solid #0f3540" }}>

                <Col xl={4} style={{ display: 'flex', margin: '1rem auto', justifyContent: 'left' }}  >

                    <a href="/"><img src="/tern-logo.png" height="75px" /></a>

                </Col>

                <Col xl={5} style={{ display: 'flex', marginTop: '2.2em', justifyContent: 'center' }}  >
                    <h1 style={{ color: "#00565D" }}>Bioimages</h1>

                </Col>

                <Col xl={8} style={{ margin: '1.5rem auto' }}>
                    {/*Search Input */}




                    <SearchFeature

                        refreshFunction={updateSearchTerms} />





                    {/*End of Search Input */}




                </Col>


                <Col xl={3} style={{ display: 'flex', marginTop: '2rem ',  justifyContent: 'center', alignItems: 'center'}}>

                    {/*Login Buttons */}
                    <Link to="/login" > <LoginButton /> </Link>

                    <Link to="/login" > <RegisterButton /> </Link>

                </Col>








                <Col xl={6} style={{ margin: '1rem auto' }}>



                </Col>

                <Col>




                </Col>









            </Row >




            {/* Filter  */}
            <Row style={{ marginTop: "1%" }}>
                <Col xl={4} >

                    <Row gutter={[24, 24]}>
                        <Col lg={24} xs={24} >
                            <CheckBox
                                list={continents}
                                handleFilters={filters => handleFilters(filters, "continents")}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row  >
                        <Col lg={24} xs={24}>
                        <ImageType 
                                list={types}
                                handleFilters={filters => handleFilters(filters, "types")}
                            />
                          
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col lg={24} xs={24}>
                            <Ancillary
                                list={sites}
                                handleFilters={filters => handleFilters(filters, "sites")}
                            />
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col lg={24} xs={24}>
                        
                              <RadioBox
                                list={price}
                                handleFilters={filters => handleFilters(filters, "price")}
                            />
                         
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col lg={24} xs={24}>
                        
                        </Col>
                    </Row>



                </Col>

                <Col xl={20} >
                    {Products.length === 0 ?
                        <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    
                            <MapSearch />
                        </div> :
                        <div>
                            <Row gutter={[16, 16]}>

                                {renderCards}

                            </Row>


                        </div>
                    }
                    <br /><br />


                    {PostSize >= Limit &&
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button style={{backgroundColor: "white", border: "1px solid #00565D", color: "#00565D", padding: "3px 9px", borderRadius: "3px", marginLeft: "10px"}} onClick={onLoadMore}>Load More</button>
                        </div>
                    }
                </Col>






            </Row>
       
            <Switch>
          <Route path='/login' component={() => {
            window.location.href = "https://auth-test.tern.org.au/auth/realms/tern/protocol/openid-connect/auth?client_id=account&redirect_uri=https%3A%2F%2Fauth-test.tern.org.au%2Fauth%2Frealms%2Ftern%2Faccount%2Flogin-redirect&state=0%2F8b80b485-2114-431c-b92a-1a27748ee396&response_type=code&scope=openid";
            return null;
          }} />
        </Switch>
      </div>
    </Router>
        
    )
}

export default LandingPage
