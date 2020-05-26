import React from 'react';
import './App.css';
import AboveHeader from './components/AboveHeader';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import SubFooter from './components/SubFooter';
import BioimagesBanner from './components/BioimagesBanner';
import SignIn from './components/SignIn';
import MapBox from './components/MapBox';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <AboveHeader />
        <MainHeader />
        <BioimagesBanner />
       
        <MapBox />
       
        <MainFooter />
        <SubFooter/>
    
      </div>

    );
  }
}

export default App;
