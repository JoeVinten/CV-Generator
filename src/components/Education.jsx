import React from "react";
import Textarea from "./Textarea";

export default function Education(props) {
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
        <Textarea
          name="education1"
          value={education.education1}
          onChange={handleChange}
        />

        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
