import React, { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import PersonalSummary from "./components/PersonalSummary/PersonalSummary";
import "./styles/SideBar.css";
import "./styles/App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [personalSummary, setPersonalSummary] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
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

  const handlePersonalSummaryChange = event => {
    setPersonalSummary(event.target.value);
  };
  return (
    <div className="App">
      <SideBar />
      <main>
        <PersonalInfo
          value={personalDetails}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <PersonalSummary
          value={personalSummary}
          onSubmit={handleSubmit}
          onChange={handlePersonalSummaryChange}
        />
      </main>
    </div>
  );
}

export default App;
