import React from "react";
import Input from "./Input";

export default function PersonalInfo(props) {
  const personalDetails = props.value;
  const handleChange = event => {
    props.onChange(event);
  };
  const handleSubmit = event => {
    props.onSubmit(event);
  };
  return (
    <section className="form-section personal-info">
      <h2>Personal information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__container">
          <Input
            type="text"
            name="name"
            label="Name"
            value={personalDetails.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            value={personalDetails.email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="phoneNumber"
            label="Phone number"
            value={personalDetails.phoneNumber}
            onChange={handleChange}
          />
          <Input
            type="url"
            name="linkedin"
            label="LinkedIn"
            value={personalDetails.linkedin}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
