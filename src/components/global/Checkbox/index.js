import React from "react";
import useStyles from "./styles"


const Checkbox = ({ checked, label, onChange }) => {
  const classes = useStyles()

  return (
    <label className={classes.container} >
      {label}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div></div>
    </label>
  );
}

export default Checkbox;
