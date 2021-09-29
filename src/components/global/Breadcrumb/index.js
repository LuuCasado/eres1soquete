import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import useStyles from "./styles"


const { Item } = AntdBreadcrumb;

const Breadcrumb = () => {
  const classes = useStyles()
  return (
    <AntdBreadcrumb className={classes.breadcrumb}>
      <Item>Home</Item>
      <Item>List</Item>
      <Item>App</Item>
    </AntdBreadcrumb>
  );
}
export default Breadcrumb;
