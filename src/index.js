import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import 'tern-react/dist/index.css';


// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import App from './App';
// import './App.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider >
    // </React.StrictMode>
    ,
    document.getElementById('root')
);

registerServiceWorker();
