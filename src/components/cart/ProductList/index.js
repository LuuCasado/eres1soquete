import React from "react";
import Card from "../Card";
import { Row } from "antd";
import { Empty } from 'antd';
import useStyles from "./styles"

const ProductList = ({ products, removeFromCart, addToCart }) => {
  const classes = useStyles()
  if (!products.length) {
    return (
      <Empty description="No hay elementos en el carrito" />
    )
  }
  return (
    <Row className={classes.container}>
      {products.map(({ img, title, price, id, quantity }, index) => (
        <Card
          key={title + id}
          className="product"
          img={img}
          title={title}
          price={price}
          id={id}
          quantity={quantity}
          removeFromCart={removeFromCart(products[index])}
          addToCart={addToCart(products[index])}
        />
      ))}
    </Row>
  )
};

export default ProductList;
