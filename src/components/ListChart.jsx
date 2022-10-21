import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buyProduct, cancelProduct } from "../redux/reducers/carts/buySlice";

import { FaHeart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function ListChart({
  item: { id, name, color, size, price },
  remove,
}) {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const decrement = () => {
    if (total !== 0) {
      setTotal(total - 1);
      dispatch(cancelProduct(price));
    }
  };

  const increment = () => {
    setTotal(total + 1);
    dispatch(buyProduct(price));
  };

  return (
    <div className="flex gap-6 mb-4 pb-4 border-b">
      <img
        className="h-40 w-40 object-cover rounded-md shadow-sm"
        src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="shirt"
      />
      <div className="w-full">
        <div className="flex justify-between items-start w-full mb-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{name}</h3>
            <h4 className="uppercase mb-4 text-xs">shirt - {color}</h4>
            <p className="text-xs mb-2 uppercase">Color : {color}</p>
            <p className="uppercase text-sm">size {size}</p>
          </div>
          <div className="flex border rounded-md items-center">
            <span
              className="py-1 px-3 border-r cursor-pointer"
              onClick={decrement}
            >
              <FaMinus />
            </span>
            <span className="py-1 px-3">{total}</span>
            <span
              className="py-1 px-3 border-l cursor-pointer"
              onClick={increment}
            >
              <FaPlus />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="uppercase mr-4 cursor-pointer">
              <FaTrash size={14} className="inline-block mr-2" />
              <span className="text-sm" onClick={() => remove(id)}>
                Hapus Item
              </span>
            </span>
            <span className="uppercase cursor-pointer">
              <FaHeart size={14} className="inline-block mr-2" />
              <span className="text-sm">move to whislist</span>
            </span>
          </div>
          <p className="font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
}
