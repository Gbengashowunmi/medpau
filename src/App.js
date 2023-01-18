import React from "react";
import ScrollToTop from "react-scroll-to-top";
import LandingPage from "./Pages/LandingPage"
import About from "./Pages/About"
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

AOS.init();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop className="scroll_up" smooth={true} />
      {/* <ScrollToTop/> */}

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
