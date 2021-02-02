import React, { useState } from "react";
import SideBar from "./components/SideBar";
import PersonalInfo from "./components/PersonalInfo";
import PersonalSummary from "./components/PersonalSummary";
import "./styles/SideBar.css";
import "./styles/App.css";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Skills from "./components/Skills";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [personalSummary, setPersonalSummary] = useState("");
  const [education, setEducation] = useState({
    education0: {},
    education1: {},
    education2: {},
    education3: {},
    education4: {},
    education5: {}
  });
  const [employment, setEmployment] = useState({
    employment0: {},
    employment1: {},
    employment2: {},
    employment3: {},
    employment4: {},
    employment5: {}
  });
  const [skills, setSkills] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleInputs = (event, callback) => {
    callback(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleEducationChange = event => {
    const curItem = [event.target.getAttribute("data-group")];
    setEducation(curDetails => {
      return {
        ...curDetails,
        [curItem]: {
          ...curDetails[curItem],
          [event.target.name]: [event.target.value]
        }
      };
    });
  };
  const handleEmploymentChange = event => {
    const curItem = [event.target.getAttribute("data-group")];
    setEmployment(curDetails => {
      return {
        ...curDetails,
        [curItem]: {
          ...curDetails[curItem],
          [event.target.name]: [event.target.value]
        }
      };
    });
  };

  return (
    <section className="App">
      <SideBar />
      <main>
        <PersonalInfo
          value={personalInfo}
          onSubmit={handleSubmit}
          onChange={e => handleInputs(e, setPersonalInfo)}
        />
        <PersonalSummary
          value={personalSummary}
          onSubmit={handleSubmit}
          onChange={e => handleInputs(e, setPersonalSummary)}
        />

        <Education
          value={education}
          onSubmit={handleSubmit}
          onChange={handleEducationChange}
        />
        <Employment
          value={employment}
          onSubmit={handleSubmit}
          onChange={handleEmploymentChange}
        />
      </main>
    </section>
  );
}

export default App;
