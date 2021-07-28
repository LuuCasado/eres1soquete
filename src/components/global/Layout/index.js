import React, { useEffect, useState } from "react";
import { Layout as AntdLayout } from "antd";
import Header from "../Header";
import Sider from "../Sider"
import Breadcrumb from "../Breadcrumb";
import Ouroboro from "../Loader";
import "antd/dist/antd.css";
import "./index.css";

const { Content, Footer } = AntdLayout;


const Layout = ({ children, selectedTab, isLoading = false }) => {
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setLoading(true)
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <AntdLayout>
      <AntdLayout className="layout">
        <Header selectedTab={selectedTab} openSider={() => setIsSiderOpen(true)} />
        <Content className="layout-content">
          <Breadcrumb />
          {loading ? <Ouroboro color="#b99cf0" /> : children}
        </Content>
        <Footer className="layout-footer">eres 1 sopete</Footer>
      </AntdLayout>
      <Sider isSiderOpen={isSiderOpen} handleChange={setIsSiderOpen} />
    </AntdLayout >
  );
};

export default Layout;
