import React, { useState } from "react";
import SideBar from "./components/SideBar";
import PersonalInfo from "./components/PersonalInfo";
import PersonalSummary from "./components/PersonalSummary";
import "./styles/SideBar.css";
import "./styles/App.css";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";

function App() {
  const [status, setStatus] = useState(1);
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
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (status < 7) setStatus(status + 1);
  };

  const handleInputs = (event, callback) => {
    callback(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleNestedChange = (event, callback) => {
    const curItem = [event.target.getAttribute("data-group")];
    callback(curDetails => {
      return {
        ...curDetails,
        [curItem]: {
          ...curDetails[curItem],
          [event.target.name]: [event.target.value]
        }
      };
    });
  };

  const handleNavClick = e => {
    const navItem = parseInt(e.target.getAttribute("data-number"));
    console.log(navItem);
    setStatus(navItem);
  };

  return (
    <section className="App">
      <SideBar status={status} handleClick={handleNavClick} />
      <main>
        {status === 1 && (
          <PersonalInfo
            value={personalInfo}
            onSubmit={handleSubmit}
            onChange={e => handleInputs(e, setPersonalInfo)}
          />
        )}
        {status === 2 && (
          <PersonalSummary
            value={personalSummary}
            onSubmit={handleSubmit}
            onChange={e => handleInputs(e, setPersonalSummary)}
          />
        )}
        {status === 3 && (
          <Education
            value={education}
            onSubmit={handleSubmit}
            onChange={e => handleNestedChange(e, setEducation)}
          />
        )}
        {status === 4 && (
          <Employment
            value={employment}
            onSubmit={handleSubmit}
            onChange={e => handleNestedChange(e, setEmployment)}
          />
        )}
        {status === 5 && (
          <Skills
            value={skills}
            onSubmit={handleSubmit}
            onChange={e => handleInputs(e, setSkills)}
          />
        )}
        {status === 6 && (
          <Hobbies
            value={hobbies}
            onSubmit={handleSubmit}
            onChange={e => handleInputs(e, setHobbies)}
          />
        )}
      </main>
    </section>
  );
}

export default App;
