import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Card, Col, Row} from 'antd';
//import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { continents, price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import { Container, Button, FormControl, InputGroup, Navbar, Image, Form, Modal } from 'react-bootstrap';





const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        continents: [],
        price: []
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
            <Card style={{  marginLeft: "10%"}}
                hoverable={true}
          
                cover={<a href={`/product/${product._id}`} > </a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
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
        <div style={{ width: '95%', margin: '-1.5rem auto' }}>
      

            <Row style={{ borderBottom: "1.5px solid #0f3540"}}>
            
            


      


               

               

                <Col xl={6} style={{  margin: '1rem auto'}}>
              
                    {/* Searchi  */}
                    <div className="searchbar" style={{ height: "60px" }}>
                    
                        <div >

                            <SearchFeature
                                refreshFunction={updateSearchTerms}
                            />
                        </div>


                    </div>
                   
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
                            <RadioBox
                                list={price}
                                handleFilters={filters => handleFilters(filters, "price")}
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
                            <RadioBox
                                list={price}
                                handleFilters={filters => handleFilters(filters, "price")}
                            />
                        </Col>
                    </Row>
 

     
                </Col>

                <Col xl={20} >
                {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                 <h2>hello</h2>
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
                            <button onClick={onLoadMore}>Load More</button>
                        </div>
                    }
                </Col>






            </Row>

        </div>
    )
}

export default LandingPage
