import { Product } from "@/typings";
import Link from "next/link";
import React from "react";

const getProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return data.products;
};

async function ProductList() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <div className="flex flex-col space-y-5 p-10">
        {products?.map((product) => (
          <Link
            key={product.id}
            className="p-5 bg-gray-200 border border-green-400"
            href={`/products/${product.id}`}
          >
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
