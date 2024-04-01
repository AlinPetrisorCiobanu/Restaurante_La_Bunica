import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Body } from "./pages/Body/Body";
import "./index.scss";
import { Nav_bar } from "./common/Nav-bar/Nav-bar";

function App() {
  return (
    <Router>
      <Nav_bar />
      <Body />
    </Router>
  );
}

export default App;