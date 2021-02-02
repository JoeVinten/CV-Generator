import React from "react";
import Textarea from "./Textarea";

export default function Hobbies(props) {
  const hobbies = props.value;
  const handleChange = event => {
    props.onChange(event);
  };
  const handleSubmit = event => {
    props.onSubmit(event);
  };
  return (
    <section className="form-section">
      <h2>Hobbies</h2>
      <form onSubmit={handleSubmit}>
        <Textarea
          name="hobbies"
          value={hobbies.hobbies}
          onChange={handleChange}
        />
        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
