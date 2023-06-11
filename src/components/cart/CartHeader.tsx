"use client";
import React from "react";
import { Chip } from "@material-tailwind/react";

interface CardHeaderProps {
  length?: number;
}

const CartHeader: React.FC<CardHeaderProps> = ({ length }) => {
  return (
    <div className="flex flex-row w-[60%] gap-20 mb-5 md:justify-center">
      <div className="flex">
        <h1 className="text-center text-2xl font-bold mr-5 text-primary">
          Cart Items
        </h1>
        <Chip
          variant="outlined"
          value={`${length ?? 0} items`}
          className="text-primary border-primary"
        />
      </div>
    </div>
  );
};

export default CartHeader;
