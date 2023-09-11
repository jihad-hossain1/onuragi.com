import { Spin } from "antd";
import React from "react";

const ProductLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
      <Spin size="large" />
    </div>
  );
};

export default ProductLoading;
