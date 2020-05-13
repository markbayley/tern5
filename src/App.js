import React from 'react';
import './App.css';




class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div class="above-header">
          <div class="container">
            <div class="above-header-section-wrap d-flex">
              <div class="above-header-section above-header-section-1">
                <div class="user-select">
                  <div class="ast-custom-html"><a href="#"><img src="img/logo-mini-all.png" alt="" /></a></div>
                </div>
              </div>

              <div class="above-header-section above-header-section-2">
                <div class="user-select">
                  <div class="ast-custom-html"><a href="#" target="_blank" class="btn-orange">Data</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

     

        <div class="main-header">
          <div class="container">
            <div class="main-header-container d-flex">
              <div class="site-branding">
                <a href="#"><span><img src="img/logo@3x.png" alt="" /></span></a>
              </div>
              <div class="main-header-bar-navigation">
          
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul id="primary-menu" class="main-header-menu d-flex">
                  <li><a href="#">About</a>
                    <ul class="dropdown">

                    </ul>
                  </li>
                  <li><a href="#">TERN Observatory</a>
                    <ul class="dropdown">

                    </ul>
                  </li>
                  <li><a href="#">Tools & Resources</a>
                    <ul class="dropDown">
                

                    </ul>
                  </li>
                  <li><a href="#">Community</a>
                    <ul class="dropdown">

                    </ul>
                  </li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>





        <div class="main-footer">
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
      </div>





    );
  }
}

export default App;
