import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

// helper function
const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 30 },
  });
  const product: Product = await res.json();
  console.log('FETCHING DATA NEW', product);
  return product;
};

async function ProductPage({ params: { id } }: PageProps) {
  const product = await getProduct(id);
  return (
    <div>
      <h1>I am a single product {product.id}</h1>
      <h2>{product.description}</h2>
      <h3>{product.price}</h3>
    </div>
  );
}

const getProducts = async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return data.products;
};

export async function generateStaticParams() {
  const products: Product[] = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default ProductPage;
