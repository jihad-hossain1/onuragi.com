"use client";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
// import { BellIcon } from "@heroicons/react/24/solid";
import DarkModeButton from "../darkmodeToggler/DarkModeButton";
// import useTheme from "@/hooks/useTheme";

const TopBar = () => {
  return (
    <div className="dark: dark: mx-auto max-w-screen-xl px-4 pt-1 ">
      <div className="flex flex-wrap items-center justify-between gap-y-4 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-black"
        >
          Onuragi
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <DarkModeButton></DarkModeButton>
        </div>
        {/* <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20 "
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            className="!absolute right-1 top-1 rounded text-neutral-50"
          >
            Search
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
