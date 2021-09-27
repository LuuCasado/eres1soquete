import React from "react";
import "./index.css";


const Checkbox = ({ checked, label, onChange }) => (
  <label className="control control-checkbox">
    {label}
    <input type="checkbox" checked={checked} onChange={onChange} />
    <div className="control_indicator"></div>
  </label>
);

export default Checkbox;
