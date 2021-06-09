import React, { useState } from "react";
import { Layout as AntdLayout, Menu } from "antd";
import Header from "../Header";
import Breadcrumb from "../Breadcrumb";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";

const { Content, Footer, Sider } = AntdLayout;

const Layout = ({ children, selectedTab }) => {
  const [collapsed, setCollapsed] = useState();

  return (
    <AntdLayout>
      <Sider collapsible className="sider" collapsedWidth={0}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
            sopete jaja
          </Menu.Item>
        </Menu>
      </Sider>
      <AntdLayout className="layout">
        <Header selectedTab={selectedTab}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content className="layout-content">
          <Breadcrumb />
          {children}
        </Content>
        <Footer className="layout-footer">eres 1 sopete</Footer>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
