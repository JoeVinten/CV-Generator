import React, { useState } from "react";
import Textarea from "./Textarea";
import Input from "./Input";

// OK.... we need to push the state into here, instead of just adding a number each time you hit add new education, it needs to also add a new item on the state otherwise it's effectively uncontrolled

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
