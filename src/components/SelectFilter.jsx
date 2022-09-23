import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setStock } from "../features/filterSlice";

const SelectFilter = ({ name, data }) => {
  const dispatch = useDispatch();
  const { category, stock } = useSelector((state) => state.filter);

  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    if (name === "stock") {
      dispatch(setStock(selectValue));
    } else {
      dispatch(setCategory(selectValue));
    }
  }, [selectValue, name, dispatch]);

  return (
    <select
      name={name}
      value={name === "stock" ? stock : category}
      onChange={(e) => setSelectValue(e.target.value)}
      className="py-2 px-4 mx-2 rounded-md"
    >
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
