import { getProducts } from "@/utils/getProducts";
import React from "react";
import SingleProduct from "./SingleProduct";

const Products = async ({ searchParams: { categoryId } }) => {
  const products = await getProducts(categoryId);
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
