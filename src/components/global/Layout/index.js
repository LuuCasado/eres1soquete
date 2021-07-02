import React, { useState } from "react";
import { Layout as AntdLayout } from "antd";
import Header from "../Header";
import Sider from "../Sider"
import Breadcrumb from "../Breadcrumb";

import "antd/dist/antd.css";
import "./index.css";

const { Content, Footer } = AntdLayout;

const Layout = ({ children, selectedTab }) => {
  const [isSiderOpen, setIsSiderOpen] = useState(false);

  return (
    <AntdLayout>
      <AntdLayout className="layout">
        <Header selectedTab={selectedTab} openSider={() => setIsSiderOpen(true)} />
        <Content className="layout-content">
          <Breadcrumb />
          {children}
        </Content>
        <Footer className="layout-footer">eres 1 sopete</Footer>
      </AntdLayout>
      <Sider isSiderOpen={isSiderOpen} handleChange={setIsSiderOpen} />
    </AntdLayout >
  );
};

export default Layout;
