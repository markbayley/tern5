import React, { Fragment }from 'react';
import Api from './Api';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col,
  } from 'reactstrap';

class PhotoGallery extends React.Component {
    render() {
        return (

          <Fragment>
            <Api />





            <Row style={{ paddingBottom: "5%" }} >
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText> </CardText>

                </CardBody>
              </Card>
            </Col>


            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>


            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>


            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>

            </Col >
            <Col sm="3" >
              <Card >
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>

            </Col>

            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>

            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="/img/photo-placeholder.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>

            </Col>
            <Col sm="3">
              <Card>
                <CardImg top width="100%" src="https://www.fourseasonsnursery.com.au/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/product_78639_20190709_083624.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>

                </CardBody>
              </Card>


            </Col>
          </Row>

        </Fragment>

        );
    }
}

export default PhotoGallery;