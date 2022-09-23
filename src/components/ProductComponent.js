import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToCheck,
  removeFromCheck,
  updateQty,
} from "../features/checkedSlice";
import { setCategory } from "../features/filterSlice";

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [qty, setQty] = useState(1);

  const addCheck = () => {
    checked
      ? dispatch(addToCheck({ product: product, qty: Number(qty) }))
      : dispatch(removeFromCheck(product.id));
  };

  useEffect(() => {
    addCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  useEffect(() => {
    dispatch(updateQty({ id: product.id, qty: qty }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  return (
    <main>
      <div className="flex w-11/12 mx-auto justify-evenly items-center bg-gray-50 rounded-lg">
        <div className="w-[200px]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-20 mx-auto"
          />
        </div>
        <p className="w-[250px]">{product.title}</p>
        <button
          onClick={() => dispatch(setCategory(product.category))}
          className="w-[80px] text-cyan-500 underline"
        >
          {product.category}
        </button>
        <p
          className={`w-[100px] ${
            product.stock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.stock ? "✅ In stock" : "❌ Out of stock"}
        </p>
        <p className="w-[30px]">${product.price}</p>
        <div className="w-[80px] flex gap-3">
          <input
            type="text"
            name="quantity"
            value={`${qty ? qty : 0}`}
            onChange={(e) => {
              setQty(e.target.value);
            }}
            className="w-[50px] text-center bg-gray-200 rounded-sm py-1 px-2"
          />
          <span className="flex items-center">
            <FaShoppingCart />
          </span>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductComponent;
