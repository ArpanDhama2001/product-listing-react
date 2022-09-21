import { createContext, useContext, useState } from "react";

const Products = createContext();

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <Products.Provider value={{ products, setProducts }}>
      {children}
    </Products.Provider>
  );
};

export const ProductsState = () => {
  return useContext(Products);
};

export default ProductsContext; // to provide at top level
