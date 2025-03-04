import { useState, useEffect } from "react";
import { ToggleSlider } from "react-toggle-slider";

export function CustomSlider({ toggle }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Update the DOM classes based on the current theme whenever it changes
    document.querySelectorAll(".theme").forEach((el) => {
      el.classList.remove("light-mode", "dark-mode");
      el.classList.add(`${theme}-mode`);
    });

    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Runs whenever the `theme` state changes

  let themeColors = {
    handleBackgroundColor: "#ffeac3",
    handleBackgroundColorActive: "#202030",
    barBackgroundColor: "#202030",
    barBackgroundColorActive: "#ffeac3",
    active: theme === "dark" ? true : false,
  };

  function toggleHandler() {
    // Toggle between "dark" and "light" theme
    switch (toggle) {
      case "theme":
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
        break;
      case "test":
        console.log("test toggle!");
        break;
    }
  }

  return (
    <div className={`toggle-${toggle} toggle`}>
      <ToggleSlider
        {...(toggle === "theme" ? themeColors : null)}
        onToggle={toggleHandler}
        draggable={false}
      />
    </div>
  );
}
