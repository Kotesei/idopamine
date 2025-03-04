import { useState } from "react";
import logo from "./assets/logo.png";
import { CustomSlider } from "./Components/Slider.jsx";
import scanImage from "./utils/ocr.js";

import "./App.css";

function App() {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  return (
    <>
      <div className="nav">
        <div className="logo-container">
          <img src={logo} className="logo" alt="koi fish logo" />
        </div>

        <h1>iDopamine</h1>

        <CustomSlider toggle="theme" />

        {/* <CustomSlider toggle="test" /> */}
      </div>
      <div className="container">
        <input type="file" id="imageInput" accept="image/*" multiple />
        <button onClick={scanImage}>Extract Text</button>
      </div>
    </>
  );
}

export default App;
