'use client'
import React from "react";
import { Space, Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
