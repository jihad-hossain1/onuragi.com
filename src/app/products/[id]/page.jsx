// import { getSingleProduct } from "@/utils/getSingleProduct";
// import "server-only";
// "use client";
import { getSingleProduct } from "@/utils/getSingleProduct";
import React from "react";
import Container2 from "@/components/container/Container2";

const SingleProductDetails = async ({ params: { id } }) => {
  const productDetail = await getSingleProduct(id);
  const { title, details } = productDetail;
  return (
    <Container2>
      <div className="mt-12">
        <h4 className="text-center mb-5 text-3xl font-bold">{title}</h4>
        <p className="break-all">{details}</p>
      </div>
    </Container2>
  );
};

export default SingleProductDetails;
