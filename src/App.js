import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import useInput from "./services/useInput";

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const handleSubmit = event => {
    event.preventDefault();
    console.log(personalDetails);
  };

  const handleChange = event => {
    event.persist();
    setPersonalDetails(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: [event.target.value]
      };
    });
  };
  return (
    <div className="App">
      <SideBar />
      <PersonalInfo
        value={personalDetails}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
