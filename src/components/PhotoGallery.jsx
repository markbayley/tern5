import React, { Fragment }from 'react';
import Api from './Api';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, 
  } from 'reactstrap';

import {
  Form
} from 'react-bootstrap';

class PhotoGallery extends React.Component {
    render() {
        return (

          <Fragment>
      

 



            <Row style={{ paddingBottom: "3%", paddingTop: "3%" }}  >
            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>


            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>


            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>
            


            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>

   

            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>

      
            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>



            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>
         


            <Col  sm="3">
              <Card style={{border: "white"}}>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody style={{ fontSize: "11px", fontWeight: "900", color: "#065f65", padding: "0px 0px 0px 6px"}}>


                <Form  style={{paddingTop: "25px"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check  type={type} id={`inline-${type}-1`} inline label="View"/>
      <Form.Check inline label="Select" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="Download" type={type} id={`inline-${type}-3`} />
     
    </div>
  ))}
</Form>
                
               

                </CardBody>
              </Card>
            </Col>
          </Row>

        </Fragment>

        );
    }
}

export default PhotoGallery;