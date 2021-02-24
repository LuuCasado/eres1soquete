import React from "react"
import { Card as AntdCard } from "antd"
import { Link } from "gatsby"

const { Meta } = AntdCard

const Card = product => {
  const { img, title, price } = product
  return (
    <Link to={"/ProductPage"} state={product}>
      <AntdCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={img} />}
      >
        <Meta title={title} description={`$ ${price}`} />
      </AntdCard>
    </Link>
  )
}

export default Card
