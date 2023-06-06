import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import SwitchButton from "./Button";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies. Id porta nibh venenatis cras sed felis
        eget velit. A diam sollicitudin tempor id eu. Tincidunt arcu non sodales neque sodales ut etiam sit. Eu
        scelerisque felis imperdiet proin fermentum. Faucibus a pellentesque sit amet porttitor. Laoreet id donec
        ultrices tincidunt arcu non sodales neque. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
        cras. Sollicitudin tempor id eu nisl nunc. Eget velit aliquet sagittis id consectetur purus ut. Cras pulvinar
        mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi tristique
        senectus et. Sed ullamcorper morbi tincidunt ornare massa. Et egestas quis ipsum suspendisse ultrices gravida
        
      </p>
      <SwitchButton />
    </div>
  );
}

export default App;