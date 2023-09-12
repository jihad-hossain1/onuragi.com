import { getProducts } from "@/utils/getProducts";
import React from "react";
import SingleProduct from "./SingleProduct";
import Container2 from "@/components/container/Container2";

const Products = async ({ searchParams: { categoryId } }) => {
  const products = await getProducts(categoryId);
  return (
    <Container2>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </div>
      </div>
    </Container2>
  );
};

export default Products;
