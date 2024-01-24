import { Product } from "@/typings";
import Link from "next/link";
import React from "react";
import ProductList from "../ProductList";

const getProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return data.products;
};

async function ProductsPage() {
  const products: Product[] = await getProducts();
  return (
    <div>
      <h1>List of products</h1>
      <ProductList />
    </div>
  );
}

export default ProductsPage;
