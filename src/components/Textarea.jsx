import React from "react";

export default function Textarea(props) {
  const handleChange = event => {
    props.onChange(event);
  };
  return (
    <div className="textarea-container">
      <textarea
        name={props.name}
        value={props.value || ""}
        onChange={handleChange}
      />
    </div>
  );
}
