import React from "react";

export default function Textarea(props) {
  const handleChange = event => {
    props.onChange(event);
  };
  return (
    <div>
      <div className="textarea-container">
        <textarea
          name={props.name}
          section={props.section}
          value={props.value || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
