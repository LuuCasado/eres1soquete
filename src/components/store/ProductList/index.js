import React from "react";
import Card from "../Card";
import { Row, Col } from "antd";
import "./index.css";

const ProductList = ({ products }) => (
  <Row>
    {products.map(({ img, title, price, id }, index) => (
      <Col key={title + index} className="product" span={8}>
        <Card img={img} title={title} price={price} id={id} />
      </Col>
    ))}
  </Row>
);

export default ProductList;
