import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BioImagesEngine from "./components/BioImagesEngine";

function App() {
  const initFilter = {};
  return <BioImagesEngine initFilter={initFilter} />;
}

export default App;
