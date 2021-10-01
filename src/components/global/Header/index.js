import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "gatsby";
import Cart from "src/components/global/Icons/Cart"
import DropdownMenu from "src/components/global/Header/DropdownMenu"
import SearchInput from "src/components/global/SearchInput"
import useStyles from "./styles"

const { Header: AntdHeader } = Layout;
const { Item } = Menu;

const menuItems = [
  { name: "Inicio", link: "/Home/" },
  { name: "Productos", link: "/Store/" },
  { name: "Mayorista", link: "/Wholesaler/" },
  { name: "Encargos", link: "/OrderProducts/" },
  { name: "Carrito", link: "/Cart/" },
];

const Header = ({ selectedTab, openSider }) => {
  const classes = useStyles()

  return (
    <AntdHeader className={classes.header}>
      <div className="left-aligned-icons">
        <img className={classes.logo} src="/images/logo.png" alt="logo" />
        <Menu
          className={classes.header}
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
      </div>
      <div className="right-aligned-icons" >
        <SearchInput />
        <DropdownMenu />
        <Cart className="cart-icon" onClick={openSider} />
      </div>
    </AntdHeader>
  );
}

export default Header;
