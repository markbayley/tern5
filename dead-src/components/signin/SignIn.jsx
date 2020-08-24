import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div class="row">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6">
              <div class="row align-items-center" style={{ height: "100%" }}>
                <div class="col">
                  <div class="row login-form-container">
                    <div id="kc-form" class="col">
                      <div
                        id="kc-form-wrapper"
                        class=" row justify-content-center"
                      >
                        <form
                          id="kc-form-login"
                          onSubmit="login.disabled = true; return true;"
                          action="https://auth-test.tern.org.au/auth/realms/tern/login-actions/authenticate?session_code=9gEZyr3Uvk-HOT5jEjdBNOHDiE5vvH_u9f5IFiqEoLc&amp;execution=6fa357a1-6037-4d67-8330-96901139dbc4&amp;client_id=account&amp;tab_id=Q8XsMUIOKeg"
                          method="post"
                        >
                          <div class="">
                            <label for="username" class="">
                              Username or email
                            </label>

                            <input
                              tabindex="1"
                              id="username"
                              class=""
                              name="username"
                              value=""
                              type="text"
                              autofocus
                              autocomplete="off"
                            />
                          </div>

                          <div class="">
                            <label for="password" class="">
                              Password
                            </label>
                            <input
                              tabindex="2"
                              id="password"
                              class=""
                              name="password"
                              type="password"
                              autocomplete="off"
                            />
                          </div>

                          <div class=" ">
                            <div id="kc-form-options"></div>
                            <div class="">
                              <span>
                                <a
                                  tabindex="5"
                                  href="/auth/realms/tern/login-actions/reset-credentials?client_id=account&amp;tab_id=Q8XsMUIOKeg"
                                >
                                  Forgot Password?
                                </a>
                              </span>
                            </div>
                          </div>

                          <div id="kc-form-buttons" class="">
                            <input
                              type="hidden"
                              id="id-hidden-input"
                              name="credentialId"
                            />
                            <input
                              tabIndex="4"
                              class="   "
                              name="login"
                              id="kc-login"
                              type="submit"
                              value="Sign in"
                            />
                          </div>
                        </form>
                      </div>
                      <div
                        id="kc-social-providers"
                        class=" row justify-content-center"
                      >
                        <ul class="login-pf-social list-unstyled login-pf-social-all ">
                          <li class="login-pf-social-link">
                            <a
                              href="/auth/realms/tern/broker/aaf/login?client_id=account&amp;tab_id=Q8XsMUIOKeg&amp;session_code=9gEZyr3Uvk-HOT5jEjdBNOHDiE5vvH_u9f5IFiqEoLc"
                              id="zocial-aaf"
                              class="zocial oidc"
                            >
                              {" "}
                              <span>AAF</span>
                            </a>
                          </li>
                          <li class="login-pf-social-link">
                            <a
                              href="/auth/realms/tern/broker/google/login?client_id=account&amp;tab_id=Q8XsMUIOKeg&amp;session_code=9gEZyr3Uvk-HOT5jEjdBNOHDiE5vvH_u9f5IFiqEoLc"
                              id="zocial-google"
                              class="zocial oidc"
                            >
                              {" "}
                              <span>Google</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div
                class="row login-text-container"
                style={{ height: "100%", lineHeight: "2", padding: "2em" }}
              >
                <h3>Have you signed up for our newsletter?</h3>
                <p>
                  Stay connected and see how other researchers are utilising
                  TERN's infrastructure and data.
                </p>
                <p>
                  We will send you project updates, data releases, research
                  findings, and user stories direct to your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
