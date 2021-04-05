import React, { useEffect, useState } from "react";
import Layout from "../../components/global/Layout";
import ProductList from "src/components/cart/ProductList";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const removeToCart = removedId => {
    const removedFromCart = products.filter(({ id }) => id !== removedId);
    setProducts(removedFromCart);
    sessionStorage.setItem("cart", JSON.stringify(removedFromCart));
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setProducts(currentCart);
  }, []);

  return (
    <Layout selectedTab={"5"}>
      <ProductList products={products} removeToCart={removeToCart} />
    </Layout>
  );
};

export default Cart;
