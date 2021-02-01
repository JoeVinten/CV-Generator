import React, { useState } from "react";
import Textarea from "./Textarea";
import DateFromTo from "./DateFromTo";

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
        {[...Array(educationNumber)].map((item, index) => (
          <Textarea
            name={"education-" + index}
            key={index.toString()}
            onChange={handleChange}
          />
        ))}
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
