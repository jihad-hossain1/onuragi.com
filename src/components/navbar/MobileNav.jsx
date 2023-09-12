"use client";

import React from "react";
import "./styles.css";
import { DownOutlined, AlignCenterOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const MobileNav = () => {
  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "0",
    },
    {
      label: <Link href="/products">Products</Link>,
      key: "1",
    },
    {
      label: <Link href="/about">About</Link>,
      key: "2",
    },
    {
      label: <Link href="/dashboard">Dashboard</Link>,
      key: "3",
    },
  ];
  return (
    <div className="ml-4 mt-2">
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="w-full ">
            <AlignCenterOutlined className="text-3xl" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default MobileNav;
