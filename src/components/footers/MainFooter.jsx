import React from 'react';
import { Container } from 'reactstrap';

function MainFooter() {
   
        return (
     
          
           <Container style={{paddingTop: "2%"}}>

            <div class="main-footer" >
                <div class="container">
                    <div class="main-footer-row">
                        <div class="main-footer-container">
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
                            <div class="footer-col footer-column-2">
                                <div class="footer-col-inner">
                                    <div class="footer-col-inner-border">
                                        <h3>Funding</h3>
                                        <p class="mb-46">TERN is supported by the Australian Government through the National
                                  Collaborative Research Infrastructure Strategy, <span
                                                style={{ textDecoration: "underline" }}><a
                                                    href="https://www.education.gov.au/national-collaborative-research-infrastructure-strategy-ncris">NCRIS</a></span>.
                              </p>
                                        <a
                                            href="https://www.education.gov.au/national-collaborative-research-infrastructure-strategy-ncris">
                                            <img width="138" src="img/logo-ncris@2x.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-col footer-column-3">
                                <div class="footer-col-inner">
                                    <div class="footer-col-inner-border">
                                        <h3>Co-investment</h3>
                                        <img width="180" src="img/Coinvestment-lockup.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="footer-col footer-column-4">
                                <div class="footer-col-inner">
                                    <div class="footer-col-inner-border">
                                        <h3>Newsletter</h3>
                                        <p>Subscribe for project updates, data releases, research findings, and users stories
                                  direct to your inbox.</p>
                                        <div class="subscription-form">
                                            <form action="">
                                                <input type="text" name="email" value="" placeholder="Email Address" />

                                                <input type="submit" value="Subscribe to TERN" />
                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            </Container>



        );
    }



export default MainFooter;