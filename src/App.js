import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar.jsx';
import { Container } from 'semantic-ui-react';
import logo from './logo@3x.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>

              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >

              </a>
            </header>
          </div>
        </Container>
      </Fragment>

    );

  }

}

export default App;
