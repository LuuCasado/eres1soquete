import React from "react";
import Card from "../Card";
import { Row, Col } from "antd";

const ProductList = ({ products, removeToCart, setProductQuantity }) => (
  <Row style={{ display: "flex", flexDirection: "column" }}>
    {products.map(({ img, title, price, id, quantity }) => (
      <Col key={title + id} className="product" span={6}>
        <Card
          img={img}
          title={title}
          price={price}
          id={id}
          quantity={quantity}
          removeToCart={removeToCart}
          setProductQuantity={setProductQuantity}
          products={products}
        />
      </Col>
    ))}
  </Row>
);

export default ProductList;
