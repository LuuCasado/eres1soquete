import React, { useEffect, useState } from "react";
import Layout from "../../components/global/Layout";
import ProductList from "../../components/store/ProductList";
import { Row, Col } from "antd";
import { Pagination } from "antd";
import { Carousel } from "antd";
import Filters from "../../components/store/Filters";
import "./index.css";

const Store = () => {
  const productsPerPage = 9;
  const [filters, setFilters] = useState([]);
  const [current, setCurrent] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [productList, setProductList] = useState([...filteredProductList]);

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/LuuCasado/json/db";
    fetch(url)
      .then(response => response.json())
      .then(({ products }) => setProducts(products));
  }, []);

  useEffect(() => {
    setFilteredProductList(
      products.filter(product =>
        !filters.length ? true : filters.includes(product.category)
      )
    );
    setCurrent(1);
  }, [filters, products]);

  useEffect(() => {
    current === 1
      ? setProductList(filteredProductList.slice(0, productsPerPage))
      : setProductList(
          filteredProductList.slice(
            (current - 1) * productsPerPage,
            current * productsPerPage
          )
        );
  }, [current, filteredProductList]);

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
            <ProductList products={productList} />
            <Pagination
              total={filteredProductList.length}
              pageSize={productsPerPage}
              current={current}
              onChange={setCurrent}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Store;
