"use client";
import Container2 from "@/components/container/Container2";
import Link from "next/link";

// export const metadata = {
//   title: "Dashboard @Onuragi",
// };
const DashboardLayout = ({ children }) => {
  return (
    <Container2>
      <div className="items-center">
        <nav className="px-4 pt-6 ">
          <ul className="space-y-5">
            <li>
              <Link
                href={"/dashboard/additem"}
                className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 "
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard"}
                className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 "
              >
                Dashboard Home
              </Link>
            </li>
            <li>
              <Link
                href={"/dashboard/additem"}
                className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 "
              >
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
        <div className="">{children}</div>
      </div>
    </Container2>
  );
};

export default DashboardLayout;
