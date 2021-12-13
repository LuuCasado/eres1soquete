import React, { useState } from "react";
import Button from "src/components/global/Button";
import ShippingForm from "src/components/global/ShippingForm";
import useStyles from "./styles";
import { InputNumber } from "antd";
import { openNotification } from "src/storage/cart";


const ProductInfo = ({ title, price, addToCart }) => {
  const classes = useStyles()
  const [quantity, setQuantity] = useState(1);
  const [isShippingCostVisible, setIsShippingCostVisible] = useState(false);

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
      <Button type="primary" onClick={() => {
        openNotification(quantity)
        addToCart(quantity)
      }}>
        Añadir al carrito
      </Button>
      {isShippingCostVisible ? <ShippingForm className={classes.shippingForm} /> : <Button type="link" onClick={() => setIsShippingCostVisible(true)} >Costos de envío</Button>}
    </div>
  );
};

export default ProductInfo;
