import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import TextField from "./components/TextField/TextField.js";
import Switch from "./components/Switch/Switch";

const themes = {
  dark: {
    class: "theme-dark",
    ls_key: "dark"
  },
  light: {
    class: "theme-light",
    ls_key: "light"
  }
};
const LS_THEME_KEY = "activeTheme";

function App() {
  React.useLayoutEffect(() => {
    const lsActiveTheme = getLsThemeValue();
    if (lsActiveTheme) {
      document.documentElement.className = themes[lsActiveTheme].class;
    } else {
      localStorage.setItem(LS_THEME_KEY, themes.dark.ls_key);
    }
  }, []);
  const toggleTheme = () => {
    const lsActiveTheme = getLsThemeValue();
    if (lsActiveTheme === "dark") {
      document.documentElement.className = themes.light.class;
      localStorage.setItem(LS_THEME_KEY, themes.light.ls_key);
    } else {
      document.documentElement.className = themes.dark.class;
      localStorage.setItem(LS_THEME_KEY, themes.dark.ls_key);
    }
  };

  const getLsThemeValue = () => {
    return localStorage.getItem(LS_THEME_KEY) || "dark";
  };

  return (
    <div className={`app_container secondarybg`}>
      <Header />
      <TextField />
      <div className="flexCenter marginTB10">
        <Switch
          onChange={toggleTheme}
          label={`Toggle Theme`}
          defaultValue={getLsThemeValue() === "dark" ? false : true}
        />
      </div>
    </div>
  );
}

export default App;
