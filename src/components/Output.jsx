import React from "react";

export function Output(props) {
  const {
    personalInfo,
    personalSummary,
    education,
    employment,
    skills,
    hobbies
  } = props;

  const filteredSchools = Object.keys(education).filter(inputs =>
    inputs.includes("school")
  );

  const filteredEmployment = Object.keys(employment).filter(inputs =>
    inputs.includes("company")
  );

  return (
    <section className="output">
      <div className="title">
        <h1>{personalInfo.name}</h1>
      </div>
      <div className="subtitle">
        <ul>
          <li>{personalInfo.email}</li>
          <li>{personalInfo.phoneNumber}</li>
          <li>{personalInfo.linkedin}</li>
        </ul>
      </div>
      <div className="cv__section">
        <h2>Personal summary</h2>
        <div>{personalSummary.personalSummary}</div>
      </div>
      <div className="cv__section">
        <h2>Education</h2>
        {filteredSchools.map((school, index) => (
          <div key={index} className="education__container">
            <div className="education__title">
              <h3>{education[school]}</h3>
              <p>{education[`course${index}`]}</p>
              <p>
                {education[`dateFrom${index}`]} - {education[`dateTo${index}`]}
              </p>
            </div>
            <div className="education__summary">
              {education[`summary${index}`]}
            </div>
          </div>
        ))}
      </div>
      <div className="cv__section">
        <h2>Employment history</h2>
        {filteredEmployment.map((company, index) => (
          <div key={index} className="education__container">
            <div className="education__title">
              <h3>{employment[company]}</h3>
              <p>{employment[`role${index}`]}</p>
              <p>
                {employment[`dateFrom${index}`]} -{" "}
                {employment[`dateTo${index}`]}
              </p>
            </div>
            <div className="education__summary">
              {employment[`summary${index}`]}
            </div>
          </div>
        ))}
      </div>
      <div className="cv__section">
        <h2>Skills</h2>
        <div>{skills.skills}</div>
      </div>
      <div className="cv__section">
        <h2>Hobbies</h2>
        <div>{hobbies.hobbies}</div>
      </div>
    </section>
  );
}
