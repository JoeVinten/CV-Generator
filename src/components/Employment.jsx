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

  const deleteEmployment = (e, index) => {
    e.preventDefault();
    props.onDelete(index);
    if (employmentNumber > 1) setEmploymentNumber(employmentNumber - 1);
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
                  name={"company" + index}
                  label="Company"
                  value={employment["company" + index] || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"employment" + index}
                  type="text"
                  name={"role" + index}
                  label="Role"
                  value={employment["role" + index] || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"employment" + index}
                  type="date"
                  name={"dateFrom" + index}
                  label="Date from"
                  value={employment["dateFrom" + index] || ""}
                  onChange={handleChange}
                />
                <Input
                  group={"employment" + index}
                  type="date"
                  name={"dateTo" + index}
                  label="Date to"
                  value={employment["dateTo" + index] || ""}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                group={"employment" + index}
                name={"summary" + index}
                onChange={handleChange}
                value={employment["summary" + index] || ""}
              />
              {employmentNumber > 1 ? (
                <button
                  className="btn btn--delete"
                  onClick={e => deleteEmployment(e, index)}
                >
                  Delete
                </button>
              ) : null}
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
