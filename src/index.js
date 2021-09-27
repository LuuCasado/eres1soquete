import React from "react";
import AuthContext, { initAuth } from "src/storage/auth"
import { CartProvider } from "src/storage/cart"
import "src/styles.css";

export const wrapPageElement = ({ element }) => (
  <AuthContext.Provider value={{ ...initAuth() }}>
    <CartProvider>
      {element}
    </CartProvider>
  </AuthContext.Provider>
);
