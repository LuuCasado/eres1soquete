import React, { useState, createContext } from "react";
import { getCart, setCart } from "src/utils/cart"
import { notification } from "antd";
import { HeartOutlined } from '@ant-design/icons';
import { setProductQuantity } from "src/utils/products";

const CartContext = createContext(getCart());

export const openNotification = quantity => {
  const title = ""
  notification.open({
    message: "Producto añadido!",
    icon: <HeartOutlined style={{ color: "#108ee9" }} />,
    description:
      quantity === 1
        ? `Tu ${title} fue añadido correctamente!`
        : `Tus ${title} fueron añadidos correctamente!`,
  });
};

export const initCart = (products) => {
  if (!products.length) {
    localStorage.setItem("cart", JSON.stringify(products));
  }

  return { products };
};

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(getCart());

  const addToCart = product => quantity => {
    if (quantity < 1) return;
    const { id } = product
    const index = products.findIndex(currentProduct => currentProduct.id === id);
    let updatedProducts

    if (index !== -1) {
      updatedProducts = setProductQuantity(
        products,
        id,
        products[index].quantity + quantity
      )
    } else {
      updatedProducts = [...products, { ...product, quantity }]
    }

    setCart(updatedProducts)
    setProducts(updatedProducts)

  };

  const removeFromCart = product => isDecrementing => {
    const { id } = product
    const index = products.findIndex(currentProduct => currentProduct.id === id);
    let updatedProducts

    if (isDecrementing) {
      updatedProducts = setProductQuantity(
        products,
        id,
        products[index].quantity - 1
      )
    } else {
      updatedProducts = products.filter((currentProduct) => currentProduct.id !== id);
    }
    setCart(updatedProducts)
    setProducts(updatedProducts)
  };

  return (
    <CartContext.Provider value={{ ...initCart(products), addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext