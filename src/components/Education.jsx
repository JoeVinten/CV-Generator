import React, { useState } from "react";
import Textarea from "./Textarea";
import Input from "./Input";

export default function Education(props) {
  const [educationNumber, setEducationNumber] = useState(1);

  const addEducation = () => {
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
                  name="company"
                  label="Company"
                  value={education["education" + index].company || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"education" + index}
                  type="text"
                  name="role"
                  label="Role"
                  value={education["education" + index].role}
                  onChange={handleChange}
                />
                <Input
                  group={"education" + index}
                  type="date"
                  name="dateFrom"
                  label="Date from"
                  value={education["education" + index].dateFrom}
                  onChange={handleChange}
                />
                <Input
                  group={"education" + index}
                  type="date"
                  name="dateTo"
                  label="Date to"
                  value={education["education" + index].dateTo}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                group={"education" + index}
                name="summary"
                onChange={handleChange}
                value={education["education" + index].summary}
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
