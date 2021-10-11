import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import TextField from "./components/TextField/TextField.js";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

function App() {
  return (
    <div className={`app_container secondarybg`}>
      <Header />
      <TextField />
      <div className="flexCenter marginTB10">
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default App;
