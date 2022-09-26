import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/categoriesData";
import SelectFilter from "./SelectFilter";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { clearFilter, setSearchQuery } from "../features/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  const { searchQuery } = useSelector((state) => state.filter);

  const handleClick = () => {
    dispatch(addToCart(products));
  };

  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div>
        <SelectFilter name="categories" data={categories} />
        <SelectFilter
          name="stock"
          data={["-- Stock --", "In Stock", "Out of Stock"]}
        />
        <button
          onClick={() => {
            dispatch(clearFilter());
          }}
          className="active:scale-95 underline"
        >
          Reset
        </button>
      </div>
      <div className="flex gap-2 justify-around">
        <div>
          <label htmlFor="searchbox">Search:</label>
          <input
            type="text"
            id="searchbox"
            value={searchQuery}
            onChange={(e) => {
              dispatch(setSearchQuery(e.target.value));
            }}
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
