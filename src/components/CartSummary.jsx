import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { value: cart } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  const calcTotal = () => {
    let subTotal = 0;
    cart.map((ele) => {
      subTotal += ele.price * ele.qty;
    });
    setTotal(subTotal);
  };

  useEffect(() => {
    calcTotal();
  }, [cart]);

  return (
    <div className="w-[300px] flex flex-col gap-6 border-2 border-gray-200 p-6">
      <h1 className="text-2xl -mt-2">Cart totals</h1>
      <table>
        <thead className="border-b-2 border-gray-200 text-left">
          <tr>
            <th className="py-3">SubTotal</th>
            <th className="py-3">${total}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3">Total</td>
            <td className="py-3">${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
