import React from "react";
import Layout from "../../components/global/Layout";
import { Row, Col } from "antd";
import ProductInfo from "../../components/store/ProductInfo";
import ReactImageMagnify from "react-image-magnify";

const ProductPage = ({ location }) => {
  const { state } = location;
  const { title, price, img } = state;

  return (
    <Layout selectedTab={"1"}>
      <div className="site-layout-content">
        <Row>
          <Col span={12}>
            <ReactImageMagnify
              smallImage={{ alt: title, src: img }}
              largeImage={{ src: img, width: 800, height: 800 }}
            />
          </Col>
          <Col span={12}>
            <ProductInfo title={title} price={price} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default ProductPage;