import React from "react";
import { Menu, Dropdown } from 'antd';
import { logout } from "src/utils/auth";
import Settings from "src/components/global/Icons/Settings"
import "./index.css"

const menu = (
  <Menu>
    <Menu.Item key="0">
      Perfil
    </Menu.Item>
    <Menu.Item key="1">
      Pedidos
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" onClick={logout}>
      Cerrar sesión
    </Menu.Item>
  </Menu>
);

const Sider = () => {


  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className="dropdown-clickable" >
        <Settings className="settings-icon" />
      </div>
    </Dropdown>
  );
};

export default Sider;