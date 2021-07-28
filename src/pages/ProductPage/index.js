import React, { useContext } from "react";
import Layout from "../../components/global/Layout";
import { Row, Col } from "antd";
import ProductInfo from "../../components/store/ProductInfo";
import ReactImageMagnify from "react-image-magnify";
import CartContext from 'src/storage/cart';
import useProductList from "src/hooks/useProductList"


const ProductPage = ({ location }) => {
  const { addToCart } = useContext(CartContext)
  const { search } = location;
  const query = new URLSearchParams(search);
  const queryId = Number(query.get("id"));
  const { products } = useProductList();
  const product = products.find(({ id }) => id === queryId) || {};
  const { title = "", price = "", img = "" } = product

  return (
    <Layout isLoading={!title} selectedTab="1">
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
