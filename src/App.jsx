import logo from "./assets/logo.png";
import { useState } from "react";
import { CustomSlider } from "./Components/CustomSlider.jsx";
import Steps from "./Components/Steps.jsx";
import { Section } from "./Components/Section.jsx";
import Header from "./Components/Header.jsx";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }

  return (
    <>
      <div className="header-panel">
        <div className="logo-container">
          <img src={logo} className="logo" alt="koi fish logo" />
        </div>
        <p className="title" onClick={() => console.log()}>
          iDopamine
        </p>
        <CustomSlider toggle="theme" />
      </div>
      <div className="header-content">
        <Header />
        <Steps onExtract={setData} />
      </div>
      <div className="sections">
        {data.dates
          ? data.results["Time Per Category"].map((category, i) => {
              const position = i % 2 === 0 ? "left" : "right";
              const [[categoryName, time]] = Object.entries(category);

              return (
                <Section
                  startingPosition={position}
                  key={categoryName}
                  categoryName={categoryName}
                  categoryTime={time}
                />
              );
            })
          : undefined}
      </div>
    </>
  );
}

export default App;
