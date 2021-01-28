import React, { useState } from "react";

export default function PersonalInfo() {
  const [personalDetails, setPersonalDetails] = useState({});
  // const [errors, setErrors] = useState(null);
  // const [touched, setTouched] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    console.log(personalDetails);
  };

  const handleChange = event => {
    event.persist();
    setPersonalDetails(curDetails => {
      return {
        ...curDetails,
        [event.target.name]: [event.target.value]
      };
    });
  };
  return (
    <section className="form-section personal-info">
      <h2>Personal information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__container">
          <div className="form-group">
            <label htmlFor="name" className="form-group__label">
              Name
            </label>
            <input
              name="name"
              className="form-group__input"
              type="text"
              value={personalDetails.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-group__label">
              Email
            </label>
            <input
              name="email"
              className="form-group__input"
              type="email"
              value={personalDetails.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-group__label">
              Phone number
            </label>
            <input
              name="phone"
              className="form-group__input"
              type="tel"
              value={personalDetails.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="linkedin" className="form-group__label">
              LinkedIn
            </label>
            <input
              name="linkedin"
              className="form-group__input"
              type="url"
              value={personalDetails.linkedin}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <button className="btn btn--submit">Next</button>
      </form>
    </section>
  );
}
