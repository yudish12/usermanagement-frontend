import React from "react";

const Forminput = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default Forminput;
