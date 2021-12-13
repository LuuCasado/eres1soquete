import React from "react";
import cn from 'classnames'
import { Button as AntdButton } from "antd";
import useStyles from "./styles"


const Button = ({ type, className, ...props }) => {
  const classes = useStyles()

  return (
    <AntdButton {...props} className={cn(classes.btn, { [classes.primary]: type === "primary" }, { [classes.link]: type === "link" }, { [classes.secondary]: type === "secondary" })} type={type} />
  );
};

export default Button;
