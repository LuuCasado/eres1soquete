import React, { useContext } from "react";
import Layout from "../../components/global/Layout";
import ProductList from "src/components/cart/ProductList";
import CartContext from 'src/storage/cart';


const Cart = () => {
  const { products, removeFromCart, addToCart } = useContext(CartContext);
  return (
    <Layout selectedTab={"6"}>
      <ProductList
        products={products}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </Layout>
  );
};

export default Cart;
