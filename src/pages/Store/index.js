import React from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import "./index.css"
import { Link } from "gatsby"

const { Header, Content, Footer } = Layout;

const Store = () => (
<Layout className="layout">
    <Header className="header">
      <div className="logo" />
      <Menu className="header" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/Store/">Store</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Payments/">Payments</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default Store;