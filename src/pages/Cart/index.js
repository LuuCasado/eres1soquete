import React, { useEffect, useState } from "react";
import Layout from "../../components/global/Layout";
import { Button } from "antd";
import { Col } from "antd";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const removeToCart = removedId => {
    const removedFromCart = products.filter(({ id }) => id !== removedId);
    setProducts(removedFromCart);
    sessionStorage.setItem("cart", removeToCart);
  };

  useEffect(() => {
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setProducts(currentCart);
  }, []);

  return (
    <Layout selectedTab={"5"}>
      {products.map(({ img, title, price, id }, index) => (
        <Col key={title + index} className="product" span={8}>
          <div>
            <p>{title}</p>
            <Button type="primary" onClick={() => removeToCart(id)}>
              Remover
            </Button>
          </div>
        </Col>
      ))}
    </Layout>
  );
};

export default Cart;
