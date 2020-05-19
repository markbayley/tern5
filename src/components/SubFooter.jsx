import React, { Component, Fragment } from 'react';

class SubFooter extends Component {
    render() {
        return (
            <Fragment>
                <footer class="main-footer container-fluid">
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="row align-items-center footer-partners">
                        <div class="col">
                            Key Operating Partners
                        </div>
                    </div>

                    <div class="row justify-content-center align-items-end footer-partners-list">

                        <div class="col-sm-2">
                            <img src="img/logo-uq@2x.png" alt="" width="169" height="47" />
                        </div>
                        <div class="col-sm-2">
                            <img src="https://www.tern.org.au/wp-content/uploads/james-cook-logo@2x.png" alt="" width="145" />
                        </div>
                        <div class="col-sm-2">
                            <img src="img/logo-csiro@2x.png" alt="" width="55" />
                        </div>
                        <div class="col-sm-2">
                            <img src="https://www.tern.org.au/wp-content/uploads/ua-logo@2x.png" alt="" width="145" />
                        </div>
                    </div>

                </footer>




            </Fragment>





        );
    }
}


export default SubFooter;