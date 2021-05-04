export const setProductQuantity = (products = [], id, quantity = 0) => {
  if (quantity < 1) {
    return products;
  }
  const updatedProducts = products.map(product =>
    product.id === id ? { ...product, quantity: quantity } : product
  );
  sessionStorage.setItem("cart", JSON.stringify(updatedProducts));
  return updatedProducts;
};
