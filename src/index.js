import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./store/configureStore";
// import "tern-react/dist/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { CONFIG } from "./config";

axios({
  method: "GET",
  url: "/config/config.json",
}).then((response) => {
  Object.assign(CONFIG, response.data);
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    // </React.StrictMode>
    document.getElementById("root"),
  );
});

registerServiceWorker();
