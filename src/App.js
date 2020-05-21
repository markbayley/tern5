import React from 'react';
import './App.css';
import AboveHeader from './components/AboveHeader';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import SubFooter from './components/SubFooter';
import Banner from './components/Banner';
import SignIn from './components/SignIn';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <AboveHeader />
        <MainHeader />
        <Banner />
        <SignIn />
        <MainFooter />
        <SubFooter/>
    
      </div>

    );
  }
}

export default App;
