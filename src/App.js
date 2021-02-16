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
import { Output } from "./components/Output";

function App() {
  const [status, setStatus] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({});
  const [personalSummary, setPersonalSummary] = useState("");
  const [education, setEducation] = useState({});
  const [employment, setEmployment] = useState({});
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (status < 8) setStatus(status + 1);
  };

  const handleInputs = (event, callback) => {
    callback(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleNavClick = e => {
    const navItem = parseInt(e.target.getAttribute("data-number"));
    setStatus(navItem);
  };

  const deleteEducation = index => {
    let filteredObj = {};
    for (const [key, value] of Object.entries(education)) {
      if (!key.includes(index)) {
        filteredObj[key] = value;
      }
    }
    setEducation(filteredObj);
  };

  const deleteEmployment = index => {
    let filteredObj = {};
    for (const [key, value] of Object.entries(employment)) {
      if (!key.includes(index)) {
        filteredObj[key] = value;
      }
    }
    setEmployment(filteredObj);
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
            onChange={e => handleInputs(e, setEducation)}
            onDelete={deleteEducation}
          />
        )}
        {status === 4 && (
          <Employment
            value={employment}
            onSubmit={handleSubmit}
            onChange={e => handleInputs(e, setEmployment)}
            onDelete={deleteEmployment}
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
        {status === 7 && (
          <Output
            personalInfo={personalInfo}
            personalSummary={personalSummary}
            education={education}
            employment={employment}
            skills={skills}
            hobbies={hobbies}
          />
        )}
      </main>
    </section>
  );
}

export default App;
