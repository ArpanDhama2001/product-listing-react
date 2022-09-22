import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQty } from "../features/cartSlice";

const Quantity = ({ qty, setQty, id }) => {
  const dispatch = useDispatch();
  const { value: cart } = useSelector((state) => state.cart);

  const getQty = (id) => {
    cart.map((ele) => {
      if (ele.id === id) {
        setQty(ele.qty);
      }
    });
  };

  useEffect(() => {
    getQty(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => dispatch(changeQty({ id: id, type: "decrement" }))}
      >
        -
      </button>
      <p className="px-2">{qty}</p>
      <button
        onClick={() => dispatch(changeQty({ id: id, type: "increment" }))}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
