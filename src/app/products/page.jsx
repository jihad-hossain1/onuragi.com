import React from "react";
// import Products from "./Products";
import { getProducts } from "@/utils/getProducts";

const ProductsPage = async ({ searchParams: { categoryId } }) => {
  const products = await getProducts(categoryId);
  console.log(products);
  return (
    <div>
      <h2>All Products</h2>
      <div>{/* <Products></Products> */}</div>
    </div>
  );
};

export default ProductsPage;
