import React, { useContext } from "react";
import ProductList from "src/components/cart/ProductList";
import { Divider } from 'antd';
import cn from "classnames";
import CartContext from 'src/storage/cart';
import "./index.css"


const Sider = ({ isSiderOpen, handleChange }) => {

  const { products, removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className={cn("sider-background", { "sider-open": isSiderOpen })}>
      <div className="sider-content">
        <Divider className="sider-title" >Mi carrito</Divider>
        <div className={cn({ "sider-empty-container": !products.length }, "sider-productList-container")}>
          <ProductList
            products={products}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        </div>
        <i className="far fa-times-circle" onClick={() => handleChange(false)} />
      </div>
    </div>
  );
};

export default Sider;
