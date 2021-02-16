import React, { useState } from "react";
import Textarea from "./Textarea";
import Input from "./Input";

export default function Education(props) {
  const [educationNumber, setEducationNumber] = useState(1);

  const addEducation = e => {
    e.preventDefault();
    if (educationNumber < 6) {
      setEducationNumber(educationNumber + 1);
    } else {
      console.error("Too much education for a CV!");
    }
  };

  const deleteEducation = (e, index) => {
    e.preventDefault();
    props.onDelete(index);
    if (educationNumber > 1) setEducationNumber(educationNumber - 1);
  };

  const education = props.value;

  const handleChange = event => {
    props.onChange(event);
  };
  const handleSubmit = event => {
    props.onSubmit(event);
  };

  return (
    <section className="form-section">
      <h2>Education</h2>

      <form onSubmit={handleSubmit}>
        {[...Array(educationNumber)].map((item, index) => {
          return (
            <section key={index.toString()}>
              <div className="form__container">
                <Input
                  group={"education" + index}
                  type="text"
                  name={"school" + index}
                  label="School"
                  value={education["school" + index] || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"education" + index}
                  type="text"
                  name={"course" + index}
                  label="Course"
                  value={education["course" + index] || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"education" + index}
                  type="date"
                  name={"dateFrom" + index}
                  label="Date from"
                  value={education["dateFrom" + index] || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"education" + index}
                  type="date"
                  name={"dateTo" + index}
                  label="Date to"
                  value={education["dateTo" + index] || ""}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                group={"education" + index}
                name={"summary" + index}
                onChange={handleChange}
                value={education["summary" + index] || ""}
              />
              {educationNumber > 1 ? (
                <button
                  className="btn btn--delete"
                  onClick={e => deleteEducation(e, index)}
                >
                  Delete
                </button>
              ) : null}
            </section>
          );
        })}

        <div className="btn-container">
          {educationNumber < 6 ? (
            <button className="btn btn--add" onClick={addEducation}>
              Add education
            </button>
          ) : null}

          <button className="btn btn--submit">Next</button>
        </div>
      </form>
    </section>
  );
}
