import React from "react";

export default function TextInput(props) {
  const handleChange = event => {
    props.onChange(event);
  };
  return (
    <div className="form-group">
      <label htmlFor="name" className="form-group__label">
        Name
      </label>
      <input
        name={props.name}
        className="form-group__input"
        type="text"
        value={props.item || ""}
        onChange={handleChange}
      ></input>
    </div>
  );
}
