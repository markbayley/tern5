import React from "react";
import { Container } from "reactstrap";

function MainFooter() {
  return (
    <Container style={{ paddingTop: "2%" }}>
      <div className="main-footer">
        <div className="container">
          <div className="main-footer-row">
            <div className="main-footer-container">
              <div className="footer-col footer-column-1">
                <div className="footer-col-inner">
                  <div className="footer-col-inner-border">
                    <h3>Contact us</h3>
                    <p className="mb-20">Physical &amp; Mail Address</p>
                    <div>
                      Room 156, Goddard Building (8)<br></br>
                      The University of Queensland<br></br>
                      St Lucia 4072
                    </div>
                    <p className="fz-15 font-500 mb-20">
                      P{" "}
                      <a className="text-black" href="tel:0733659097">
                        (07) 33659097<br></br>
                      </a>
                      E{" "}
                      <a href="mailto:esupport@tern.org.au">
                        esupport@tern.org.au
                      </a>
                    </p>
                    <p className="fz-15">
                      <a href="https://www.tern.org.au/access-policy">
                        Access Policy
                      </a>
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-col footer-column-2">
                <div className="footer-col-inner">
                  <div className="footer-col-inner-border">
                    <h3>Funding</h3>
                    <p className="mb-46">
                      TERN is supported by the Australian Government through the
                      National Collaborative Research Infrastructure Strategy,{" "}
                      <span style={{ textDecoration: "underline" }}>
                        <a href="https://www.education.gov.au/national-collaborative-research-infrastructure-strategy-ncris">
                          NCRIS
                        </a>
                      </span>
                      .
                    </p>
                    <a href="https://www.education.gov.au/national-collaborative-research-infrastructure-strategy-ncris">
                      <img width="138" src="img/logo-ncris@2x.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-col footer-column-3">
                <div className="footer-col-inner">
                  <div className="footer-col-inner-border">
                    <h3>Co-investment</h3>
                    <img width="180" src="img/Coinvestment-lockup.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="footer-col footer-column-4">
                <div className="footer-col-inner">
                  <div className="footer-col-inner-border">
                    <h3>Newsletter</h3>
                    <p>
                      Subscribe for project updates, data releases, research
                      findings, and users stories direct to your inbox.
                    </p>
                    <div className="subscription-form">
                      <form action="">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email Address"
                        />

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
