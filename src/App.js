import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop className="scroll_up" smooth={true} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
