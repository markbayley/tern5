import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BioImagesEngine from "./components/BioImagesEngine";

function App() {
  const initFilter = {};
  return (
    <Router>
      <BioImagesEngine initFilter={initFilter} />
    </Router>
  );
}

export default App;
