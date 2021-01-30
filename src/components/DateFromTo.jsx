import React from "react";

export default function DateFromTo(props) {
  const handleChange = event => {
    props.onChange(event);
  };
  return (
    <div className="dates">
      <div className="dateFrom__container">
        <label className="form-group__label" htmlFor="dateFrom">
          Date from:
        </label>
        <input
          className="form-group__input dates__input"
          type="date"
          name="dateFrom"
          value={props.value}
          onChange={handleChange}
        />
      </div>
      <div className="dateTo__container">
        <label className="form-group__label" htmlFor="dateTo">
          Date to:
        </label>
        <input
          className="form-group__input dates__input"
          type="date"
          name="dateTo"
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
