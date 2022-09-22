import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, STATUS } from "../features/productsSlice";

function ProductsContainer() {
  const { data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
        {data?.map((product) => {
          return <ProductComponent key={product.id} product={product} />;
        })}
      </main>
    </>
  );
}

export default ProductsContainer;
