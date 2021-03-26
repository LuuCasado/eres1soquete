import React from "react";
import { Button } from "antd";

const ProductInfo = ({ title, price, addToCart }) => (
  <div>
    <h3>{title}</h3>
    <p>{price}</p>
    <Button type="primary" onClick={addToCart}>
      Añadir al carrito
    </Button>
  </div>
);

export default ProductInfo;
