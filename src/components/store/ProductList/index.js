import React from "react";
import Card from "../Card";
import { Row, Col } from "antd";
import useStyles from "./styles"

const ProductList = ({ products }) => {
  const classes = useStyles()

  return (
    <Row>
      {products.map(({ img, title, price, id }, index) => (
        <Col key={title + index} className={classes.product} span={8}>
          <Card img={img} title={title} price={price} id={id} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
