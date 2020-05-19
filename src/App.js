import React from 'react';
import './App.css';
import AboveHeader from './components/AboveHeader';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import SubFooter from './components/SubFooter';



class App extends React.Component {
  render() {
    return (
      <div className="App">
      
        <AboveHeader />
        <MainHeader />
        <MainFooter />
    

      </div>

    );
  }
}

export default App;
