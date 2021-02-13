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
        <div className="education__container">
          <div className="education__title">
            <h3>{education.school0}</h3>
            <p>{education.course0}</p>
            <p>
              {education.dateFrom0} - {education.dateTo0}
            </p>
          </div>
          <div className="education__summary">{education.summary0}</div>
        </div>
      </div>
      <div className="cv__section">
        <h2>Employment history</h2>
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
