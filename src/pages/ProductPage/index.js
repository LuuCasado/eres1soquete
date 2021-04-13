import React from "react";
import Layout from "../../components/global/Layout";
import { Row, Col, notification } from "antd";
import ProductInfo from "../../components/store/ProductInfo";
import ReactImageMagnify from "react-image-magnify";
import { HeartOutlined } from "@ant-design/icons";
import { setProductQuantity } from "src/utils/products";

const ProductPage = ({ location }) => {
  const { state: product } = location;
  const { title, price, img, id } = product;

  const openNotification = quantity => {
    notification.open({
      message: "Producto añadido!",
      icon: <HeartOutlined style={{ color: "#108ee9" }} />,
      description:
        quantity === 1
          ? `Tu ${title} fue añadido correctamente!`
          : `Tus ${title} fueron añadidos correctamente!`,
    });
  };

  const addToCart = quantity => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const index = currentCart.findIndex(product => product.id === id);
    if (index !== -1) {
      setProductQuantity(
        currentCart,
        id,
        currentCart[index].quantity + quantity
      );
    } else {
      sessionStorage.setItem(
        "cart",
        JSON.stringify([...currentCart, { ...product, quantity }])
      );
    }
    openNotification(quantity);
  };

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
            <ProductInfo title={title} price={price} addToCart={addToCart} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default ProductPage;
