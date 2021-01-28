import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import useInput from "./services/useInput";

function App() {
  const { inputs, handleInputChange, handleSubmit } = useInput();
  return (
    <div className="App">
      <SideBar />
      <PersonalInfo />
    </div>
  );
}

export default App;
