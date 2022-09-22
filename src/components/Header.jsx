import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/categoriesData";
import SelectFilter from "./SelectFilter";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart } from "../features/cartSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { value: selectedItems } = useSelector((state) => state.checked);

  const handleClick = () => {
    dispatch(clearCart());
    dispatch(addToCart(selectedItems));
  };

  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div>
        <SelectFilter data={categories} />
        <SelectFilter data={["✅ In Stock", "❌ Out of Stock"]} />
        <button className="active:scale-95 underline">Reset</button>
      </div>
      <div className="flex gap-2 justify-around">
        <div>
          <label htmlFor="searchbox">Search:</label>
          <input
            type="text"
            id="searchbox"
            className="bg-gray-100 px-4 py-2 mx-2 rounded-md"
          />
        </div>
        <Link
          to="/cart"
          onClick={handleClick}
          className="py-2 px-8 bg-green-700 hover:bg-opacity-95 active:scale-95 text-white rounded-md"
        >
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
