import React, { useEffect, useState } from "react";
import { Menu, Dropdown } from 'antd';
import Settings from "src/components/global/Icons/Settings"
import "./index.css"

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" >
      3rd menu item（disabled）
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