import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import MainFooter from './components/MainFooter';
import SubFooter from './components/SubFooter';
import BioimagesBanner from './components/BioimagesBanner';
import MainBanner from './components/MainBanner';
import SignIn from './components/SignIn';
import MapBox from './components/MapBox';
import Api from './components/Api';
import PhotoGallery from './components/PhotoGallery';
import Card from './components/Cards';
import BioimagesMenu from './components/BioimagesMenu';
import SearchBar from './components/SearchBar';
import BioimagesSubFooter from './components/BioimagesSubFooter'
import Data from './components/Data';






class App extends React.Component {
  render() {
    return (
      <div className="App">

      
     
        <Data />
    
      
     
       <MainFooter/>
        <BioimagesSubFooter />
       
    
      </div>

    );
  }
}

export default App;
