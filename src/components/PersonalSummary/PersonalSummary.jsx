import React from "react";

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
        <div className="textarea-container">
          <textarea value={personalSummary || ""} onChange={handleChange} />
        </div>

        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
