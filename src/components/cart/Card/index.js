import React from "react";
import { Card as AntdCard } from "antd";

const { Meta } = AntdCard;

const Card = ({
  img,
  title,
  price,
  removeFromCart,
  addToCart,
  quantity,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: 20,
    }}
  >
    <img src={img} style={{ maxWidth: "20%" }} />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Meta title={title} style={{ justifyContent: "right" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <i
          className="fas fa-minus"
          style={{
            marginRight: 10,
            cursor: quantity === 1 ? "not-allowed" : "pointer",
          }}
          onClick={() => removeFromCart(true)}
        ></i>
        <span>{quantity}</span>
        <i
          className="fas fa-plus"
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => addToCart(1)}
        ></i>
      </div>
    </div>

    <div style={{ alignSelf: "center" }}>
      <span>$ {price}</span>
      <i
        style={{ marginLeft: 5, cursor: "pointer" }}
        className="far fa-trash-alt"
        onClick={() => removeFromCart()}
      />
    </div>
  </div>
);

export default Card;
