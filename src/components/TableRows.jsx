import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";
import Quantity from "./Quantity";

const TableRows = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.qty);
  const removeItem = (id) => {
    dispatch(remove(item.id));
  };

  return (
    <tr>
      <td>
        <button onClick={() => removeItem(item.id)}>
          <FaTimes />
        </button>
      </td>
      <td>
        <div className="flex gap-4 items-center">
          <div className="w-[200px] mt-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-20 w-[150px]"
            />
          </div>
          <p>{item.title}</p>
        </div>
      </td>
      <td>
        <p>${item.price}</p>
      </td>
      <td>
        <Quantity qty={quantity} setQty={setQuantity} id={item.id} />
      </td>
      <td>
        <p>${item.qty * item.price}</p>
      </td>
    </tr>
  );
};

export default TableRows;
