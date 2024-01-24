import ProductList from "@/app/ProductList";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <div>
        <ProductList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
