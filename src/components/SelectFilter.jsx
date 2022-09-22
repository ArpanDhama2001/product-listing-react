import React from "react";

const SelectFilter = ({ data }) => {
  return (
    <select name="" className="py-2 px-4 mx-2 rounded-md">
      {data.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default SelectFilter;
