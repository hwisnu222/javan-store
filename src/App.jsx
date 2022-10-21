import { useState } from "react";

import ListChart from "./components/ListChart";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./App.scss";

import data from "./config/data.json";

function App() {
  const [listShirt, setListShirt] = useState(data);
  const { total } = useSelector((state) => state.buy);

  const removeList = (id) => {
    const resultRemove = listShirt.filter((list) => list.id !== id);
    setListShirt(resultRemove);
    toast.success("Item removed!");
  };

  const checkout = () => {
    toast.success("Checkout!");
  };

  return (
    <>
      <header className="text-center p-6 bg-gray-100">
        <h3 className="font-bold text-2xl">Shooping Cart</h3>
      </header>
      <div className="mx-auto px-2 md:px-32">
        <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-[6fr_3fr] gap-6">
          <div className="shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold mb-4">Cart (2) items</h3>
            {listShirt?.map((shirt, index) => (
              <ListChart item={shirt} key={index} remove={removeList} />
            ))}
          </div>
          <div>
            <div className="shadow-md rounded-md p-4">
              <h3 className="text-lg font-bold mb-4">The total amount of</h3>
              <div>
                <table className="border-b pb-4 mb-1 w-full">
                  <tbody>
                    <tr key="">
                      <td>Temporary amount</td>
                      <td className="text-right">${total}</td>
                    </tr>
                    <tr key="">
                      <td>Shipping</td>
                      <td>Gratis</td>
                    </tr>
                  </tbody>
                </table>
                <table className="mb-4 w-full">
                  <tbody>
                    <tr key="">
                      <td className="font-semibold">
                        <p>The total amount of</p>
                        <p>include VAT</p>
                      </td>
                      <td className="font-semibold">${total}</td>
                    </tr>
                  </tbody>
                </table>

                <button
                  className="bg-sky-600 text-white text-xs font-medium w-full uppercase hover:bg-sky-800"
                  onClick={checkout}
                >
                  Go to checkout
                </button>
              </div>
            </div>
            <div className="shadow-md rounded-md p-4 mt-4">
              <span className="cursor-pointer flex justify-between items-center">
                <span>Add a checkout code (opsional)</span>
                <FaAngleDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
