import React, { useEffect, useState } from "react";
import { ProductsState } from "../context/productsContext";
import { getAllProducts } from "../config/apiConfig";
import ProductComponent from "./ProductComponent";
import Header from "./Header";

function ProductsContainer() {
  const { products, setProducts } = ProductsState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(getAllProducts());
      const { products } = await res.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Oops! Something went wrong.</h1>;
  }

  // console.log("products:", products);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4">
        {products.map((product) => {
          return <ProductComponent key={product.id} product={product} />;
        })}
      </main>
    </>
  );
}

export default ProductsContainer;
