"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts, Product } from "../fetchPosts";
import { useCart } from "../context/CartContext";

const USD_TO_KES = 10;

export default function Products() {
  const { data: products, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchPosts,
  });

  const { cart, addToCart, removeFromCart } = useCart();

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Something went wrong!</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto">
        {products?.slice(0, 15).map((product) => {
          const inCart = cart.some((item) => item.id === product.id);
          const priceInKES = (product.price * USD_TO_KES).toFixed(2); 

          return (
            <li key={product.id} className="p-4 border rounded-lg shadow-md bg-gray-100 flex flex-col items-center">
              <img className="w-32 h-32 object-cover rounded-md border" src={product.image} alt={product.title} />
              <p className="font-medium text-gray-700 mt-2 text-center">{product.title}</p>
              
              {/* Display Price in KES Only */}
              <p className="text-gray-800 font-semibold mt-1">
                <span className="text-gray-600">Price:</span> KES {priceInKES}
              </p>

              {inCart ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700 transition"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}