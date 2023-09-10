"use client";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import React from "react";
import DarkModeButton from "../darkmodeToggler/DarkModeButton";
import { StickyNavbar } from "./StickyNavbar";
import TopBar from "./TopBar";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      {/* <StickyNavbar theme={theme} toggleTheme={toggleTheme}></StickyNavbar> */}
      {/* <DarkModeButton></DarkModeButton> */}
      <TopBar></TopBar>
      <nav className="mt-2 mb-4 dark:text-slate-100">
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
          {/* <DarkModeButton
            theme={theme}
            toggleTheme={toggleTheme}
          ></DarkModeButton> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
