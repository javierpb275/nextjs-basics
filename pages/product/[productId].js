import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Product {router.query.productId}</h1>
    </div>
  );
};

export default ProductItem;
