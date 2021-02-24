import React from "react"
import Layout from "../../components/global/Layout"
import products from "../../../static/products.json"
import ProductList from "../../components/store/ProductList"

const Store = () => (
  <Layout selectedTab={"1"}>
    <div className="site-layout-content">
     <ProductList products={products.products} />
    </div>
  </Layout>
)

export default Store
