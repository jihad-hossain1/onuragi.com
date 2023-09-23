"use client";
import Container2 from "@/components/container/Container2";
import Link from "next/link";
import React from "react";

const SingleProduct = ({ product }) => {
  const { _id, title, price } = product;
  return (
    <>
      <Link href={`/products/${_id}`}>
        <div className="shadow border border-x-main hover:shadow-orange-900 px-4 py-2">
          <p>{title}</p>
          <p>{price}</p>
          {/* <p>{_id}</p> */}
        </div>
      </Link>
    </>
  );
};

export default SingleProduct;
