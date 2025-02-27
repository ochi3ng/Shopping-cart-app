import Image from "next/image";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  );
}