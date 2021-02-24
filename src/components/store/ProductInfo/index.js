import React from "react"
import { Button } from 'antd'

const ProductInfo = ({title, price}) => <div>
  <h3>{title}</h3>
  <p>{price}</p>
  <Button type="primary">Primary Button</Button>
</div>

export default ProductInfo
