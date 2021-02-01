import React from "react";

export default function TextInput(props) {
  const handleChange = event => {
    props.onChange(event);
  };
  return (
    <div className="form-group">
      <label htmlFor="name" className="form-group__label">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        className="form-group__input"
        data-group={props.group}
        type="text"
        value={props.value || ""}
        onChange={handleChange}
      />
    </div>
  );
}
