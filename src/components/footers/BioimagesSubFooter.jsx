import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav } from 'react-bootstrap';

function BioimagesSubFooter() {

    return (
        <Container className="main-footer" fluid style={{ paddingTop: "20%", paddingLeft: "0%", paddingRight: "0%"}}>
          
                <Nav  className="footer-partners justify-content-center" activeKey="/home" style={{lineHeight: "5px"}}>
                    <Nav.Item style={{padding: "0 20px 0px 20px", fontSize: "16px"}}>
                        <Nav.Link style={{color: "white"}} href="/home">Access Policy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding: "0 20px 0 20px", fontSize: "16px"}}>
                        <Nav.Link style={{color: "white"}} eventKey="link-1">Data Licensing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{padding: "0 20px 0 20px", fontSize: "16px"}}>
                        <Nav.Link style={{color: "white"}} eventKey="link-2">Copyright</Nav.Link>
                    </Nav.Item>
                
                </Nav>

                <Row>
                    <Col>
                        <div className="row justify-content-center align-items-end footer-partners-list" style={{ paddingLeft: "5%", paddingTop: "1%"}}>

                            <div className="col-sm-2">
                                <img src="img/logo-uq@2x.png" alt="" width="169" height="47" />
                            </div>

                            <div className="col-sm-2">
                                <img src="https://www.tern.org.au/wp-content/uploads/james-cook-logo@2x.png" alt="" width="145" />
                            </div>

                            <div className="col-sm-2">
                                <img src="img/logo-csiro@2x.png" alt="" width="55" />
                            </div>
                            <div className="col-sm-2">
                                <img src="https://www.tern.org.au/wp-content/uploads/ua-logo@2x.png" alt="" width="145" />
                            </div>

                        </div>
                    </Col>
                </Row>

        </Container>

    );
}



export default BioimagesSubFooter;