import logo from "./assets/logo.png";
import { CustomSlider } from "./Components/Slider.jsx";
import { CustomFileInput } from "./Components/FileInput.jsx";
import scanImage from "./utils/ocr.js";
import { Section } from "./Components/Section.jsx";

import "./App.css";

function App() {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  return (
    <>
      <div className="header-panel">
        <div className="logo-container">
          <img src={logo} className="logo" alt="koi fish logo" />
        </div>
        <h1>iDopamine</h1>
        <CustomSlider toggle="theme" />
      </div>
      <div className="header-content">
        <div className="container"></div>
        <div className="popout-container">
          <div className="steps step-one">
            <div className="info-img"></div>
            <CustomFileInput />
          </div>
          <div className="steps step-two">
            <div className="info-img"></div>
            <button className="button" onClick={scanImage}>
              Extract Text
            </button>
          </div>
        </div>
      </div>
      <div className="sections">
        <Section />
        <Section startingPosition="right" />
        <Section />
      </div>
    </>
  );
}

export default App;
