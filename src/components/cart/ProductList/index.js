import React from "react";
import Card from "../Card";
import { Row, Col } from "antd";

const ProductList = ({ products, removeToCart }) => (
  <Row>
    {products.map(({ img, title, price, id }) => (
      <Col key={title + id} className="product" span={6}>
        <Card
          img={img}
          title={title}
          price={price}
          id={id}
          removeToCart={removeToCart}
        />
      </Col>
    ))}
  </Row>
);

export default ProductList;
