import React from "react";
import TextInput from "./Input";

export default function Skills(props) {
  const skills = props.value;
  const handleChange = event => {
    props.onChange(event);
  };
  const handleSubmit = event => {
    props.onSubmit(event);
  };
  return (
    <section className="form-section">
      <h2>Personal summary</h2>
      <form onSubmit={handleSubmit}>
        <Textarea
          name="Skills"
          value={skills.personalSummary}
          onChange={handleChange}
        />

        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
