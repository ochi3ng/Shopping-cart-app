import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

// Fetch products from Fake Store API
export const fetchPosts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};