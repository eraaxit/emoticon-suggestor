import "./ThemeSwitch.css";
import React from "react";

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
const ThemeSwitch = () => {
  const ref = React.useRef(null);
  const [activeTheme, setActiveTheme] = React.useState(
    () => themes[localStorage.getItem(LS_THEME_KEY) || "dark"]
  );
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
      setActiveTheme(themes.light);
      document.documentElement.className = themes.light.class;
      localStorage.setItem(LS_THEME_KEY, themes.light.ls_key);
    } else {
      setActiveTheme(themes.dark);
      document.documentElement.className = themes.dark.class;
      localStorage.setItem(LS_THEME_KEY, themes.dark.ls_key);
    }
  };

  const getLsThemeValue = () => {
    return localStorage.getItem(LS_THEME_KEY) || "dark";
  };
  return (
    <div className="switchBtn">
      <input
        ref={ref}
        id={"theme_switcher"}
        type="checkbox"
        className={`app__switch`}
        onChange={toggleTheme}
        defaultChecked={getLsThemeValue() === "dark" ? false : true}
      ></input>
      <span className="switch__thumb" onClick={() => ref.current.click()}>
        <span className="switch__thumb--icon">
          {activeTheme.ls_key === "dark" ? "🌑" : "🌞"}
        </span>
      </span>
      <label htmlFor={"theme_switcher"}>Toggle Theme</label>
    </div>
  );
};

export default ThemeSwitch;
