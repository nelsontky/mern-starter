import React from "react";

function Errors({ errors }) {
  return (
    <div style={{ color: "red" }}>
      {errors != null && (
        <ul>
          {Object.keys(errors).map((key, index) => (
            <li key={index}>{errors[key]}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Errors;
