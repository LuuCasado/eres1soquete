import React, { useEffect, useState } from "react";
import ProductList from "src/components/cart/ProductList";
import { setProductQuantity } from "src/utils/products";
import { Divider } from 'antd';
import cn from "classnames";
import "./index.css"


const Sider = ({ isSiderOpen, handleChange }) => {
  const [products, setProducts] = useState([]);
  const removeToCart = removedId => {
    const removedFromCart = products.filter(({ id }) => id !== removedId);
    setProducts(removedFromCart);
    sessionStorage.setItem("cart", JSON.stringify(removedFromCart));
  };
  const setQuantity = (products, id, quantity) =>
    setProducts(setProductQuantity(products, id, quantity));

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setProducts(currentCart);
  }, []);

  // console.log(isSiderOpen)
  // if (!isSiderOpen) return null;

  return (
    <div className={cn("sider-background", { "sider-open": isSiderOpen })}>
      <div className="sider-content">
        <Divider className="sider-title" >Mi carrito</Divider>
        <div className={cn({ "sider-empty-container": !products.length })}>
          <ProductList
            products={products}
            removeToCart={removeToCart}
            setProductQuantity={setQuantity}
          />
        </div>
        <i className="far fa-times-circle" onClick={() => handleChange(false)} />
      </div>
    </div>
  );
};

export default Sider;
