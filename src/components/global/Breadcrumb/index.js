import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";

const { Item } = AntdBreadcrumb;

const Breadcrumb = () => (
  <AntdBreadcrumb className="breadcrumb">
    <Item>Home</Item>
    <Item>List</Item>
    <Item>App</Item>
  </AntdBreadcrumb>
);

export default Breadcrumb;
