import React from "react";
import AuthContext, { initAuth } from "./auth"

import { CartProvider } from "src/storage/cart"


export const wrapPageElement = ({ element }) => {

  return (
    <AuthContext.Provider value={{ ...initAuth() }}>
      <CartProvider>
        {element}
      </CartProvider>
    </AuthContext.Provider>
  );
}