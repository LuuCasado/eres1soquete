import React from "react";
import { Menu, Dropdown } from 'antd';
import { logout } from "src/utils/auth";
import { Link } from "gatsby";
import Settings from "src/components/global/Icons/Settings"
import { useContext } from "react";
import AuthContext from "src/storage/auth";
import useStyles from "./styles"


const { Item, Divider } = Menu;

const menuAuth = (
  <Menu>
    <Item key="0">
      Perfil
    </Item>
    <Item key="1">
      Pedidos
    </Item>
    <Divider />
    <Item key="3" onClick={logout}>
      Cerrar sesión
    </Item>
  </Menu>
);

const menuNotAuth = (
  <Menu>
    <Item key="0">
      <Link to={"/Register/"}>Registrate</Link>
    </Item>
    <Item key="1">
      <Link to={"/Login/"}>Ingresá</Link>
    </Item>
  </Menu>
);


const DropdownMenu = () => {

  const { loggedIn, user } = useContext(AuthContext);
  const isAuthenticated = loggedIn && user;
  const classes = useStyles()

  const menu = isAuthenticated ? menuAuth : menuNotAuth

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className={classes.dropdownClickable} >
        <Settings className={classes.settingsIcon} />
      </div>
    </Dropdown>
  );
};

export default DropdownMenu;