import React from "react";
import Image from "./componenty_A/Image";

import "./App.css";

import CookBookList from "./componenty_A/CookBookList";

const App = () => {
  return (
    <div className="App">
      <div className="color__bg">
        <CookBookList />
      </div>
    </div>
  );
};

export default App;
