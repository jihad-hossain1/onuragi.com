"use client";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import React from "react";
import DarkModeButton from "../darkmodeToggler/DarkModeButton";
import { StickyNavbar } from "./StickyNavbar";
import TopBar from "./TopBar";
import ExtraNav from "./ExtraNav";
import Container2 from "../container/Container2";
// import Categories from "@/app/(home)/Categories";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container2>
      {/* <StickyNavbar theme={theme} toggleTheme={toggleTheme}></StickyNavbar> */}
      {/* <TopBar></TopBar> */}
      <div className="flex justify-between items-center">
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
      {/* <nav className="mt-2 mb-4 dark:text-slate-100">
        <ul className="flex items-center  space-x-3">
          <Link href="/">
            <li className="px-4 rounded border border-neutral-200 hover:shadow shadow-sm focus:border-neutral-400 dark:border-neutral-focus">
              Home
            </li>
          </Link>

          <Link href="/products">
            <li className="px-4 rounded border border-neutral-200 hover:shadow shadow-sm focus:border-neutral-400 dark:border-neutral-focus">
              product
            </li>
          </Link>

          <Link href="/about">
            <li className="px-4 rounded border border-neutral-200 hover:shadow shadow-sm focus:border-neutral-400 dark:border-neutral-focus">
              about
            </li>
          </Link>
          
        </ul>
      </nav> */}
    </Container2>
  );
};

export default Navbar;
