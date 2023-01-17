import React from "react";
import ScrollToTop from "react-scroll-to-top";
import LandingPage from "./Pages/LandingPage"
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className="App">
      <ScrollToTop className="scroll_up" smooth={true} />
      <LandingPage/>
    </div>
  );
}

export default App;
