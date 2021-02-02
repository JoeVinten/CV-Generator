import React, { useState } from "react";
import Textarea from "./Textarea";
import Input from "./Input";

export default function Employment(props) {
  const [employmentNumber, setEmploymentNumber] = useState(1);

  const addEmployment = e => {
    e.preventDefault();
    if (employmentNumber < 6) {
      setEmploymentNumber(employmentNumber + 1);
    } else {
      console.error("Too much employment for a CV!");
    }
  };

  const employment = props.value;
  const handleChange = event => {
    props.onChange(event);
  };
  const handleSubmit = event => {
    props.onSubmit(event);
  };

  return (
    <section className="form-section">
      <h2>Employment history</h2>

      <form onSubmit={handleSubmit}>
        {[...Array(employmentNumber)].map((item, index) => {
          return (
            <section key={index.toString()}>
              <div className="form__container">
                <Input
                  group={"employment" + index}
                  type="text"
                  name="company"
                  label="Company"
                  value={employment["employment" + index].company || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"employment" + index}
                  type="text"
                  name="role"
                  label="Role"
                  value={employment["employment" + index].role}
                  onChange={handleChange}
                />
                <Input
                  group={"employment" + index}
                  type="date"
                  name="dateFrom"
                  label="Date from"
                  value={employment["employment" + index].dateFrom}
                  onChange={handleChange}
                />
                <Input
                  group={"employment" + index}
                  type="date"
                  name="dateTo"
                  label="Date to"
                  value={employment["employment" + index].dateTo}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                group={"employment" + index}
                name="summary"
                onChange={handleChange}
                value={employment["employment" + index].summary}
              />
            </section>
          );
        })}

        <div className="btn-container">
          {employmentNumber < 6 ? (
            <button className="btn btn--add" onClick={addEmployment}>
              Add employment
            </button>
          ) : null}

          <button className="btn btn--submit">Next</button>
        </div>
      </form>
    </section>
  );
}
