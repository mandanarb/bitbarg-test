import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import support from "./component/ect/images/support.png";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";

import About from "./component/p/About/About";

import Wage from "./Wage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="wage" element={<Wage />} />
      </Routes>
      <div className="support_icon_container">
        <div className="support_transition"></div>
        <img className="support_icon" src={support} alt="support" />
      </div>
    </div>
  );
}

export default App;
