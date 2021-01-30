import React from "react";
import Textarea from "./Textarea";

export default function PersonalSummary(props) {
  const personalSummary = props.value;
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
          name="personalSummary"
          value={personalSummary.personalSummary}
          onChange={handleChange}
        />

        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
