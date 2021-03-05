import React, { useState } from "react";
import Layout from "../../components/global/Layout";
import products from "../../../static/products.json";
import ProductList from "../../components/store/ProductList";
import { Row, Col } from "antd";
import { Pagination } from "antd";
import { Carousel } from "antd";
import Filters from "../../components/store/Filters";
import "./index.css";

const Store = () => {
  /*useEffect(() => {
    const url = "https://eres1soquete.herokuapp.com/"
    console.log(url)
    fetch(url)
      // .then(response => response.json())
      .then(data => console.log(data))
  })*/

  const [filters, setFilters] = useState([]);

  return (
    <Layout selectedTab={"1"}>
      <div className="site-layout-content">
        <Carousel autoplay className="contentStyle">
          <div>
            <h3 className="contentStyle">Soquetes</h3>
          </div>
          <div>
            <h3 className="contentStyle">Medias</h3>
          </div>
          <div>
            <h3 className="contentStyle">Bucaneras</h3>
          </div>
          <div>
            <h3 className="contentStyle">Boxers</h3>
          </div>
        </Carousel>
        <Row>
          <Filters
            filters={filters}
            setFilters={(section, value) =>
              value
                ? setFilters([...filters, section])
                : setFilters([...filters].filter(filter => filter !== section))
            }
          />
          <Col span={18}>
            <ProductList
              products={products.products.filter(product =>
                !filters.length ? true : filters.includes(product.category)
              )}
            />
            <Pagination defaultCurrent={1} total={50} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Store;
