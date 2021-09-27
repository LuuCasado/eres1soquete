import React, { useEffect, useState } from "react";
import Layout from "../../components/global/Layout";
import ProductList from "../../components/store/ProductList";
import { Row, Col } from "antd";
import { Pagination } from "antd";
import Filters from "../../components/store/Filters";
import useProductList from "src/hooks/useProductList"
import "./index.css";

const Store = () => {
  const productsPerPage = 9;
  const [filters, setFilters] = useState([]);
  const [current, setCurrent] = useState(1);
  const { products } = useProductList();
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [productList, setProductList] = useState([...filteredProductList]);

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
    <Layout selectedTab={"2"} isLoading={!products.length}>
      <div className="site-layout-content">
        <h1 className="title" > Productos </h1>
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
