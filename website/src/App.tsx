import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;