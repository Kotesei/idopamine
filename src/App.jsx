import logo from "./assets/logo.png";
import { CustomSlider } from "./Components/CustomSlider.jsx";
import Steps from "./Components/Steps.jsx";
import { Section } from "./Components/Section.jsx";
import Header from "./Components/Header.jsx";

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
        <p className="title">iDopamine</p>
        <CustomSlider toggle="theme" />
      </div>
      <div className="header-content">
        <div className="container">
          <Header />
        </div>
        <div className="popout-container">
          <Steps />
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
