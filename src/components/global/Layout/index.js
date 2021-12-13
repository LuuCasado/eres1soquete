import React, { useEffect, useState } from "react";
import { Layout as AntdLayout } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import Sider from "../Sider";
import Breadcrumb from "../Breadcrumb";
import Ouroboro from "../Loader";
import useStyles from "./styles"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";

const { Content } = AntdLayout;

const Layout = ({ children, selectedTab, isLoading = false }) => {
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [loading, setLoading] = useState(isLoading);
  const classes = useStyles()

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflowX = "hidden"
  }, [])

  useEffect(() => {
    if (isLoading) {
      setLoading(true)
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    if (isSiderOpen) {
      body.style.overflowY = "hidden"
    } else {
      body.style.overflowY = "scroll"

    }
  }, [isSiderOpen]);

  return (
    <AntdLayout>
      <AntdLayout className="layout">
        <Header selectedTab={selectedTab} openSider={() => setIsSiderOpen(true)} />
        <Content className={classes.layoutContent}>
          <Breadcrumb />
          {loading ? <Ouroboro color="#b99cf0" /> :
            <div className={classes.siteLayoutContent}>
              {children}
            </div>
          }
        </Content>

      </AntdLayout>
      <Footer />
      <Sider isSiderOpen={isSiderOpen} handleChange={setIsSiderOpen} />
    </AntdLayout >
  );
};

export default Layout;
