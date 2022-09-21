import React from "react";
import { categories } from "../utils/categoriesData";
import SelectFilter from "./SelectFilter";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div>
        <SelectFilter data={categories} />
        <SelectFilter data={["In Stock", "Out of Stock"]} />
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
        <button className="py-2 px-8 bg-green-700 hover:bg-opacity-95 active:scale-95 text-white rounded-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
