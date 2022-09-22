import React from "react";
import ProductTable from "../components/ProductTable";
import CartSummary from "../components/CartSummary";
function CartPage() {
  return (
    <div className="p-6 flex gap-6 w-full justify-center">
      <div className="flex gap-6 w-4/5">
        <ProductTable />
        <CartSummary />
      </div>
    </div>
  );
}

export default CartPage;
