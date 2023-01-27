import React from "react";
import "./App.css";
import Navigation from "./Component/Portfolio/Navigation";
import MainContent from "./Component/Portfolio/MainContent";
// import Home from "./Component/Functional/portfolio/Home";
// import Parent from "./Component/Class/Parent";
// import logo from "./logo.svg";
// import Home from "./Component/Functional/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <MainContent />
    </div>
  );
};

export default App;
