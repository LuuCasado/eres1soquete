import React, { useContext } from "react";
import Layout from "../../components/global/Layout";
import { Row, Col } from "antd";
import ProductInfo from "../../components/store/ProductInfo";
import ReactImageMagnify from "react-image-magnify";
import CartContext from 'src/storage/cart';

const ProductPage = ({ location }) => {
  const { addToCart } = useContext(CartContext)
  const { state: product } = location;
  const { title, price, img, id } = product;

  return (
    <Layout selectedTab="1">
      <div className="site-layout-content">
        <Row>
          <Col span={12}>
            <Col span={12} offset={6}>
              <ReactImageMagnify
                isHintEnabled
                enlargedImagePosition="over"
                shouldHideHintAfterFirstActivation={false}
                lensStyle={{ backgroundColor: "rgba(0,0,0,.6)" }}
                largeImage={{
                  src: img,
                  width: 800,
                  height: 800,
                }}
                smallImage={{
                  alt: title,
                  isFluidWidth: true,
                  src: img,
                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                }}
              />
            </Col>
          </Col>
          <Col span={12}>
            <Col span={20} offset={2}>
              <ProductInfo title={title} price={price} addToCart={addToCart(product)} />
            </Col>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default ProductPage;
