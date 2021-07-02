import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "gatsby";
import Cart from "src/components/global/Icons/Cart"
import DropdownMenu from "src/components/global/Header/DropdownMenu"
import "./index.css";

const { Header: AntdHeader } = Layout;
const { Item } = Menu;

const menuItems = [
  { name: "Store", link: "/Store/" },
  { name: "Payments", link: "/Payments/" },
  { name: "Register", link: "/Register/" },
  { name: "Login", link: "/Login/" },
  { name: "Cart", link: "/Cart/" },
];

const Header = ({ selectedTab, openSider }) => (
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
    <DropdownMenu />
    <Cart className="cart-icon" onClick={openSider} />
  </AntdHeader>
);

export default Header;
