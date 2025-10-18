import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../utils/cartSlice.jsx";
import { addOrder } from "../../utils/orderSlice.jsx";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const orders = useSelector(state => state.orders.list); // get orders list from redux
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (cartItems.length === 0 && !orderConfirmed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-10">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">Add products to your cart to see them here.</p>
      </div>
    );
  }

  const handleConfirmOrder = () => {
    const order = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      paymentMethod,
      date: new Date().toISOString()
    };
    dispatch(addOrder(order));
    dispatch(clearCart());
    setOrderConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Your Cart</h1>

      {orderConfirmed && (
        <div className="max-w-5xl mx-auto bg-green-100 text-green-800 p-4 rounded-lg mb-6 shadow">
          Your order has been confirmed! Thank you for your purchase.
        </div>
      )}

      {/* Current Cart Items */}
      {cartItems.length > 0 && (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-6 mb-6 border-b pb-4 items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-lg" />
              <div className="flex-1">
                <h2 className="font-semibold text-lg text-blue-700">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.dosage}</p>
                <p className="text-sm mt-1 text-gray-700">{item.usage}</p>
                <p className="text-xs text-gray-400 mt-1">Manufactured by {item.manufacturer}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold text-green-700 text-lg">₹{item.price}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-2 text-red-600 text-sm hover:underline"
                  disabled={orderConfirmed}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mb-6">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-green-700">₹{totalPrice}</span>
          </div>

          {/* Payment Section */}
          <div className="mb-6 max-w-md mx-auto">
            <h3 className="font-semibold text-lg mb-3">Select Payment Method</h3>
            <select
              className="w-full p-3 border rounded shadow-sm"
              disabled={orderConfirmed}
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <div className="text-center">
            <button
              className={`bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition ${orderConfirmed ? "cursor-not-allowed opacity-50" : ""
                }`}
              disabled={orderConfirmed}
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {/* My Orders Section */}
      {orders.length > 0 && (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">My Orders</h2>
          {orders.map(order => (
            <div key={order.id} className="mb-8 border-b pb-4">
              <div className="flex justify-between mb-2">
                <div className="font-semibold text-lg">Order #{order.id}</div>
                <div className="text-sm text-gray-500">{new Date(order.date).toLocaleString()}</div>
              </div>
              <div className="mb-2 text-gray-700">Payment: <span className="font-semibold">{order.paymentMethod}</span></div>
              <div>
                {order.items.map(item => (
                  <div key={item.id} className="flex justify-between border-b py-1 last:border-0">
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 font-semibold text-green-700 text-right">Total: ₹{order.total}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
