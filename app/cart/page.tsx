"use client";

import { useCart } from "../context/CartContext";

const USD_TO_KES = 10; // Approximate exchange rate

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total price in KES
  const totalPriceKES = cart.reduce((total, item) => total + item.price * item.quantity * USD_TO_KES, 0);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-4">
            {cart.map((item) => {
              const itemPriceKES = (item.price * USD_TO_KES).toFixed(2);
              return (
                <li key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4">
                    {/* Styled Image */}
                    <img
                      className="w-24 h-24 object-cover rounded-lg border"
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <h3 className="text-gray-800 font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-800 font-semibold mt-1">
                        <span className="text-gray-600">Price:</span> KES {itemPriceKES} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 font-medium"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Total Price */}
          <div className="flex justify-between items-center border-t mt-6 pt-4 text-lg font-semibold">
            <span className="text-gray-700">Total:</span>
            <span className="text-gray-900">KES {totalPriceKES.toFixed(2)}</span>
          </div>

          {/* Clear Cart Button */}
          <div className="text-center mt-6">
            <button
              className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}