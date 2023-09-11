"use client";
import {
  CiBag1,
  CiShoppingCart,
  CiHeart,
  CiUser,
  CiSearch,
} from "react-icons/ci";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Tooltip } from "antd";

const ExtraNav = ({ toggle, settoggle }) => {
  return (
    <nav>
      <ul className="  flex md:flex-row-reverse md:space-x-3  flex-col justify-center items-center ">
        <li>
          <Tooltip placement="bottom" color="#f50" title={"Bag"}>
            <CiBag1 className="text-3xl hover:text-main cursor-pointer "></CiBag1>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="bottom" color="#f50" title={"Whitelist"}>
            <CiHeart className="text-3xl hover:text-main cursor-pointer "></CiHeart>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="bottom" color="#f50" title={"Account"}>
            <CiUser className="text-3xl hover:text-main cursor-pointer "></CiUser>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="bottom" color="#f50" title={"Search"}>
            <CiSearch className="text-3xl hover:text-main cursor-pointer "></CiSearch>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default ExtraNav;
