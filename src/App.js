import React from "react";
import ScrollToTop from "react-scroll-to-top";
import LandingPage from "./Pages/LandingPage"
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop className="scroll_up" smooth={true} />
      <LandingPage/>
    </div>
  );
}

export default App;
