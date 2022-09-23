import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, STATUS } from "../features/productsSlice";

function ProductsContainer() {
  const { data, status } = useSelector((state) => state.products);
  const { category, stock, searchQuery } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const filterProducts = () => {
    let products = data;

    if (category !== "-- Categories --" && category) {
      products = products.filter((product) => product.category === category);
    }

    if (stock === "In Stock") {
      products = products.filter((ele) => ele.stock > 0);
    } else if (stock === "Out of Stock") {
      products = products.filter((ele) => ele.stock < 1);
    }

    if (searchQuery) {
      products = products.filter((ele) =>
        ele.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  };

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === STATUS.loading) {
    return <h1>Loading...</h1>;
  }

  if (status === STATUS.error) {
    return <h1>Oops! Something went wrong.</h1>;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4">
        {filterProducts()?.map((product) => {
          return <ProductComponent key={product.id} product={product} />;
        })}
      </main>
    </>
  );
}

export default ProductsContainer;
