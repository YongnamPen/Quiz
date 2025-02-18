import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";

const App = () => {
  return (
    <div className="App">
      <StepOne />
      {/* <Welcome /> */}
    </div>
  );
};

export default App;
