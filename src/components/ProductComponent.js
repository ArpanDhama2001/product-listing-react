import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductComponent = ({ product }) => {
  const [checked, setChecked] = useState();
  const [qty, setQty] = useState(1);

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
        <Link to={`/category/${product.category}`}>
          <button className="w-[80px] text-cyan-500 underline">
            {product.category}
          </button>
        </Link>
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
            onChange={(e) => setQty(e.target.value)}
            className="w-[50px] text-center bg-gray-200 rounded-sm py-1 px-2"
          />
          <span className="flex items-center">
            <FaShoppingCart />
          </span>
          <input
            type="checkbox"
            checked={checked}
            onClick={() => {
              setChecked(!checked);
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductComponent;
