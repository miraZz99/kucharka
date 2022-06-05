import React from "react";

import { Header } from "./containers";

import "./App.css";

import CookBookList from "./componenty_A/CookBookList";

const App = () => {
  return (
    <div className="App">
      <div className="color__bg">
        <CookBookList />

        {/* <Header /> */}
      </div>
      {/* <Recipes /> */}
    </div>
  );
};

export default App;
