import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboveHeader from './AboveHeader';
import MapBox from './MapBox';

class Bootstrap extends React.Component {
	render() {
		return (
			<div>
				<AboveHeader />
		
			

				<Container>
					<Row>
						<Col ></Col>
					</Row>
				</Container>
				<Container fluid="md">
					<Row>
						<Col> <MapBox /></Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col style={{ border: "1px solid grey" }}>1 of 2<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }}>2 of 2<img src='logo192.png' /></Col>
					</Row>
					<Row>
						<Col style={{ border: "1px solid grey" }}>1 of 3<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }}>2 of 3<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }}>3 of 3<img src='logo192.png' /></Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col style={{ border: "1px solid grey" }}>1 of 3<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }} xs={6}>2 of 3 (wider)<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }}>3 of 3<img src='logo192.png' /></Col>
					</Row>
					<Row>
						<Col style={{ border: "1px solid grey" }}>1 of 3<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }} xs={5}>2 of 3 (wider)<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }}>3 of 3<img src='logo192.png' /></Col>
					</Row>
				</Container>
				<Container>
					<Row className="justify-content-md-center">
						<Col style={{ border: "1px solid grey" }} xs lg="2">1 of 3<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }} md="auto"><MapBox /></Col>
						<Col style={{ border: "1px solid grey" }} xs lg="2">3 of 3<img src='logo192.png' /></Col>
					</Row>
					<Row>
						<Col style={{ border: "1px solid grey" }}>1 of 3<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }} md="auto"><MapBox /></Col>
						<Col style={{ border: "1px solid grey" }} xs lg="2">3 of 3<img src='logo192.png' /></Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col style={{ border: "1px solid grey" }} sm={4}>sm=8<img src='logo192.png' /></Col>
						<Col style={{ border: "1px solid grey" }} sm={8}><MapBox /></Col>
					</Row>
				
						
							<div class="main-footer">
								<div class="container">
									<div class="main-footer-row">
										<div class="main-footer-container"></div>
										<div class="footer-col footer-column-1">
											<div class="footer-col-inner">
												<div class="footer-col-inner-border">
													<h3>Contact us</h3>
													<p class="mb-20">
														Physical &amp; Mail Address
                                                        <div >Room 156, Goddard Building (8)<br></br>
															The University of Queensland<br></br>
															St Lucia 4072</div>
														<p class="fz-15 font-500 mb-20">P <a class="text-black" href="tel:0733659097">(07) 33659097<br></br></a>E <a href="mailto:esupport@tern.org.au">esupport@tern.org.au</a></p>
														<p class="fz-15"><a href="https://www.tern.org.au/access-policy">Access Policy</a></p>
														<ul class="social-icons">
															<li><a href="#"><i class="fa fa-facebook"></i></a></li>
															<li><a href="#"><i class="fa fa-twitter"></i></a></li>
															<li><a href="#"><i class="fa fa-instagram"></i></a></li>
															<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
														</ul>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

				
			
				</Container>
			</div>
		);
	}
}

export default Bootstrap;
