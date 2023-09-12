// import { getSingleProduct } from "@/utils/getSingleProduct";
import "server-only";
import { getSingleProduct } from "@/utils/getSingleProduct";
import React from "react";

const SingleProductDetails = async ({ params: { id } }) => {
  const productDetail = await getSingleProduct(id);
  const { title, details } = productDetail;
  return (
    <div>
      <h4 className="text-center text-3xl font-bold">{title}</h4>
      <p>{details}</p>
    </div>
  );
};

export default SingleProductDetails;
