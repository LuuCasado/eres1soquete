import React, { useState } from "react";
import { Button } from "antd";
import { InputNumber } from "antd";

const ProductInfo = ({ title, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h3>{title}</h3>
      <p>{price}</p>
      <div
        style={{
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <InputNumber min={1} max={10} defaultValue={1} onChange={setQuantity} />
      </div>
      <Button type="primary" onClick={() => addToCart(quantity)}>
        Añadir al carrito
      </Button>
    </div>
  );
};

export default ProductInfo;
