import React from "react";
import Card from "../Card";
import { Row, Col } from "antd";
import "./index.css";

const ProductList = ({ products }) => (
  <Row>
    {products.map(({ img, title, price }) => (
      // eslint-disable-next-line react/jsx-key
      <Col className="product" span={8}>
        <Card img={img} title={title} price={price} />
      </Col>
    ))}
  </Row>
);

export default ProductList;
