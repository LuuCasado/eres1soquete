import React from "react";
import { Layout as AntdLayout, Menu, Breadcrumb } from "antd";
import { Link } from "gatsby";
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer } = AntdLayout;

const Layout = ({ children, selectedTab }) => (
  <AntdLayout className="layout">
    <Header className="header">
      <div className="logo" />
      <Menu
        className="header"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectedTab]}
      >
        <Menu.Item key="1">
          <Link to="/Store/">Store</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Payments/">Payments</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/Register/">Registrate</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/Login/">Ingresa</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/Cart/">Carrito</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      {children}
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </AntdLayout>
);

export default Layout;
