"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext"; // ✅ Ensure correct import
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <CartProvider> {/* ✅ Wrap the entire app inside CartProvider */}
            {children}
          </CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
