import React, { useState } from "react";
import SideBar from "./components/SideBar";
import PersonalInfo from "./components/PersonalInfo";
import PersonalSummary from "./components/PersonalSummary";
import "./styles/SideBar.css";
import "./styles/App.css";
import Education from "./components/Education";
import DateFromTo from "./components/DateFromTo";
import Textarea from "./components/Textarea";

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [personalSummary, setPersonalSummary] = useState("");
  const [education, setEducation] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setPersonalDetails(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: [event.target.value]
      };
    });
  };

  const handlePersonalSummaryChange = event => {
    setPersonalSummary(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: [event.target.value]
      };
    });
  };

  const handleEducationChange = event => {
    setEducation(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: [event.target.value]
      };
    });
  };

  return (
    <section className="App">
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
        <Education
          value={education}
          onSubmit={handleSubmit}
          onChange={handleEducationChange}
        />
      </main>
    </section>
  );
}

export default App;
