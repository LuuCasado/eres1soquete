import { useEffect, useState } from "react";

export default () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/LuuCasado/json/db";
    fetch(url)
      .then(response => response.json())
      .then(({ products }) => setProducts(products || []));
  }, []);

  return ({ products })
}