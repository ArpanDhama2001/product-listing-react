import React from "react";
import { useSelector } from "react-redux";
import TableRows from "./TableRows";

const ProductTable = () => {
  const { value: cart } = useSelector((state) => state.cart);

  return (
    <table className="grow text-left">
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr className="">
          <th className="w-14 py-3"></th>
          <th className=" py-3">Product</th>
          <th className="w-24 py-3">Price</th>
          <th className="w-24 py-3">Quantity</th>
          <th className="w-28 py-3">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => {
          return <TableRows key={index} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
