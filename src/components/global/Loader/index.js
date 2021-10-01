import React from "react";
import cn from 'classnames'
import useStyles from "./styles"
import "antd/dist/antd.css";

const Ouroboro = ({ color: background }) => {
  const classes = useStyles()

  return (
    <div className={cn(classes.loader)}>
      <span className={cn(classes.left)}>
        <span className={cn(classes.anim)} style={{ background }}></span>
      </span>
      <span className={cn(classes.right)}>
        <span className={cn(classes.anim)} style={{ background }}></span>
      </span>
    </div>
  )
}
export default Ouroboro;
