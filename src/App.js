import React from 'react';
import './App.css';
import AboveHeader from './components/AboveHeader';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import SubFooter from './components/SubFooter';
import BioimagesBanner from './components/BioimagesBanner';
import SignIn from './components/SignIn';
import MapBox from './components/MapBox';
import Api from './components/Api';
import PhotoGallery from './components/PhotoGallery';
import Card from './components/Cards';
import DataPortalMenu from './components/DataPortalMenu';
import SearchBar from './components/SearchBar';
import BioimagesSubFooter from './components/BioimagesSubFooter'


class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <AboveHeader />
        <DataPortalMenu />
      
      
        <BioimagesBanner />
      
   
        <MapBox />
   
     
       <MainFooter/>
        <BioimagesSubFooter />
       
    
      </div>

    );
  }
}

export default App;
