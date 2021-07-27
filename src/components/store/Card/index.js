import React from "react";
import { Card as AntdCard } from "antd";
import { Link } from "gatsby";
import { buildQueryUrl } from "src/utils/helpers"

const { Meta } = AntdCard;

const Card = props => {
  const { img, title, price, id } = props;
  return (
    <Link to={buildQueryUrl("/ProductPage", { id })} state={{ img, title, price, id }}>
      <AntdCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={img} />}
      >
        <Meta title={title} description={`$ ${price}`} />
      </AntdCard>
    </Link>
  );
};

export default Card;
