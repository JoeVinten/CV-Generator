import React from "react";
import Textarea from "./Textarea";

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
      <h2>Skills</h2>
      <form onSubmit={handleSubmit}>
        <Textarea name="skills" value={skills.skills} onChange={handleChange} />
        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
