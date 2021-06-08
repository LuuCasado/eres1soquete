import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "gatsby";

const { Header: AntdHeader } = Layout;
const { Item } = Menu;

const menuItems = [
  { name: "Store", link: "/Store/" },
  { name: "Payments", link: "/Payments/" },
  { name: "Register", link: "/Register/" },
  { name: "Login", link: "/Login/" },
  { name: "Cart", link: "/Cart/" },
];

const Header = ({ selectedTab }) => (
  <AntdHeader className="header">
    <div className="logo" />
    <Menu
      className="header"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[selectedTab]}
    >
      {menuItems.map(({ name, link }, index) => (
        <Item key={index + 1}>
          <Link to={link}>{name}</Link>
        </Item>
      ))}
    </Menu>
  </AntdHeader>
);

export default Header;
