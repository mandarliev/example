import React from "react";

type PageProps = {
    params: {
        id: string;
    }
}

function ProductPage({params: {id}}: PageProps) {

  return <div>I am a single product {id}</div>;
}

export default ProductPage;
