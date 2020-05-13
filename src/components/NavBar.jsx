import React, { Component } from 'react';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
//import Button from 'react-bootstrap/Button';




class NavBar extends Component {


    render() {

        return (
            <Menu inverted fixed='top' >
                <Container >


                    <Menu.Item >

                        <Button
                            to='/Home'
                            content='Home'

                        />

                    </Menu.Item>
                    <Menu.Item  >
                        <Button

                            to='/Data'
                            content='Data'
                        />
                    </Menu.Item>

                </Container>
            </Menu>
        );
    }
}

export default NavBar;