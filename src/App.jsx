import React from "react";
import "./styles/main.css";
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Welcome = lazy(() => import("./pages/Welcome"));
const StepOne = lazy(() => import("./pages/StepOne"));
const StepTwo = lazy(() => import("./pages/StepTwo"));
const StepThree = lazy(() => import("./pages/StepThree"));
const StepFour = lazy(() => import("./pages/StepFour"));
const Thanks = lazy(() => import("./pages/Thanks"));


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/step-one" element={<StepOne/>}/>
      <Route path="/step-two" element={<StepTwo/>}/>
      <Route path="/step-three" element={<StepThree/>}/>
      <Route path="/step-four" element={<StepFour/>}/>
      <Route path="/thanks" element={<Thanks/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
