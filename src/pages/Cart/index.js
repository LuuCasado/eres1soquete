import React, { useEffect, useState } from "react";
import Layout from "../../components/global/Layout";
import ProductList from "src/components/cart/ProductList";
import { setProductQuantity } from "src/utils/products";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const removeToCart = removedId => {
    const removedFromCart = products.filter(({ id }) => id !== removedId);
    setProducts(removedFromCart);
    localStorage.setItem("cart", JSON.stringify(removedFromCart));
  };
  const setQuantity = (products, id, quantity) =>
    setProducts(setProductQuantity(products, id, quantity));

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(currentCart);
  }, []);

  return (
    <Layout selectedTab={"5"}>
      <ProductList
        products={products}
        removeToCart={removeToCart}
        setProductQuantity={setQuantity}
      />
    </Layout>
  );
};

export default Cart;
