import React from "react";
import { Card as AntdCard } from "antd";

const Card = ({ img, title, price, id, removeToCart }) => {
  const { Meta } = AntdCard;
  return (
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
          <i className="fas fa-minus"></i>
          <span>3</span>
          <i className="fas fa-plus"></i>
        </div>
      </div>

      <div style={{ alignSelf: "center" }}>
        <span>$ {price}</span>
        <i
          style={{ marginLeft: 5 }}
          className="far fa-trash-alt"
          onClick={() => removeToCart(id)}
        />
      </div>
    </div>
  );
};

export default Card;
