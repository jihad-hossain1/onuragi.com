// import { getSingleProduct } from "@/utils/getSingleProduct";
import { getSingleProduct } from "@/utils/getSingleProduct";
import React from "react";

const SingleProductDetails = async ({ params: { id } }) => {
  const productDetail = await getSingleProduct(id);
  const { imageUrls, title, price, ratings, features, details, brand } =
    productDetail;
  return (
    <div>
      <h4 className="text-center text-3xl font-bold">{title}</h4>
    </div>
  );
};

export default SingleProductDetails;
