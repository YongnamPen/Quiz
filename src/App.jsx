import React from "react";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import "./styles/main.css";

const App = () => {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <StepOne />
      {/* <StepTwo/> */}
    </div>
  );
};

export default App;
