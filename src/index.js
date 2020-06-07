import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar';
import Api from './components/Api'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

