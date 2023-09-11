import Container2 from "@/components/container/Container2";
import ExtraNav from "@/components/navbar/ExtraNav";
import { getCategories } from "@/utils/getCategories";
import Link from "next/link";
import React from "react";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <Container2>
      <div className="flex justify-between items-center">
        <div className="flex space-x-8 ">
          {categories.map(({ name, _id }) => (
            <Link
              className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 uppercase md:text-[16px]"
              href={`/products?categoryId=${_id}`}
              key={_id}
            >
              <div>{name}</div>
            </Link>
          ))}
        </div>
        <ExtraNav></ExtraNav>
      </div>
    </Container2>
  );
};

export default Categories;
