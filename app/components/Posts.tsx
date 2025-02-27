"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../fetchPosts";

export default function Posts() {
  // Use React Query to fetch data
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading)
    return <p className="text-center text-gray-500 text-lg">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 text-lg">Something went wrong!</p>
    );

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Latest Posts
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {posts?.slice(0, 10).map((post: { id: number; title: string; image: string; price: number }) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-md bg-white transition-transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover rounded-md border mb-3"
              src={post.image}
              alt={post.title}
            />
            <h3 className="text-gray-800 font-semibold text-lg mb-2">
              {post.title}
            </h3>
            <p className="text-gray-800 font-semibold mt-1">
                <span className="text-gray-600">Price:</span> ${post.price}
              </p>
          </li>
        ))}
      </ul>
    </div>
  );
}