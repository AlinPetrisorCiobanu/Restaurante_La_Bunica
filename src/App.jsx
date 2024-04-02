import React from "react";
import { Body } from "./pages/Body/Body";
import { Nav_bar } from "./common/Nav-bar/Nav-bar";
import { Footer } from "./common/Footer/Footer";
import { useLocation } from "react-router-dom";
import "./styles.scss";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" || location.pathname === "/contacto" ? (
        <>
          <Nav_bar />
          <Body />
        </>
      ) : (
        <>
          <Nav_bar />
          <Body />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
