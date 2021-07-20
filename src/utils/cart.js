
export const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

export const setCart = products =>
  localStorage.setItem("cart", JSON.stringify(products));


