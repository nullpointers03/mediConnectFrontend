import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";  // import useNavigate
import { addToCart } from "../../utils/cartSlice.jsx";

const API_URL = "https://mocki.io/v1/14216ad4-cc09-4515-8107-b43526be8718";

const MedicineDeliveryPage = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // initialize navigate

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => setMedicines(data))
      .finally(() => setLoading(false));
  }, []);

  // Navigate to cart page
  const goToCart = () => {
    navigate("/cart"); // update with your cart route
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 pb-7">Online Medicine Catalog</h1>

      {/* Add Cart Button */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-end">
        <button
          onClick={goToCart}
          className="bg-green-600 text-white rounded-lg px-6 py-2 font-semibold shadow hover:bg-green-700 transition"
        >
          Go to Cart ({cartItems.length})
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading medicines...</div>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {medicines.map(med => (
            <div
              key={med.id}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={med.image}
                alt={med.name}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <div className="text-xl font-semibold text-blue-700 mb-1">{med.name}</div>
              <div className="text-xs text-gray-400 mb-2">{med.dosage}</div>
              <div className="text-sm text-gray-700 mb-2 min-h-[48px]">{med.usage}</div>
              <div className="text-xs text-gray-500 mb-2">By {med.manufacturer}</div>
              <div className="flex items-center mb-3">
                <span className="font-bold text-lg text-green-700 mr-2">₹{med.price}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${med.stock ? "bg-green-100 text-green-700" : "bg-red-200 text-red-700"}`}>
                  {med.stock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <button
                onClick={() => dispatch(addToCart(med))}
                disabled={!med.stock || cartItems.some(item => item.id === med.id)}
                className={`px-5 py-2 rounded-lg font-bold mt-auto transition shadow
                  ${!med.stock || cartItems.some(item => item.id === med.id)
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"}
                `}
              >
                {cartItems.some(item => item.id === med.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicineDeliveryPage;
