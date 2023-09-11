"use client";
// import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { useState } from "react";
import DarkModeButton from "../darkmodeToggler/DarkModeButton";
// import { StickyNavbar } from "./StickyNavbar";
// import TopBar from "./TopBar";
import ExtraNav from "./ExtraNav";
import Container2 from "../container/Container2";
// import Categories from "@/app/(home)/Categories";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();
  const [toggle, settoggle] = useState(false);
  return (
    <Container2>
      <div className="hidden md:flex justify-between items-center">
        <DarkModeButton></DarkModeButton>
        {/* <Categories></Categories> */}
        <ul className="flex space-x-3 md:text-[16px]">
          <li>
            <Link
              href={`/`}
              className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/products`}
              className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 uppercase"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href={`/about`}
              className="relative after:bg-orange-900 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 uppercase"
            >
              About
            </Link>
          </li>
        </ul>
        <ExtraNav></ExtraNav>
      </div>
      <div className="md:hidden fixed">
        <button
          onClick={() => settoggle(!toggle)}
          className="border border-main bg-main  hover:bg-opacity-50 rounded hover:rounded-lg shadow hover:shadow-lg transition ease-in-out duration-300 "
        >
          ToggleMe
        </button>
        {toggle && <ExtraNav settoggle={settoggle} toggle={toggle}></ExtraNav>}
      </div>
    </Container2>
  );
};

export default Navbar;
