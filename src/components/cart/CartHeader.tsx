"use client";
import React from "react";
import { Chip } from "@material-tailwind/react"; 
import Link from 'next/link';

const CartHeader = ({length} : {length?: number}) => {
  return (
    <Link href='/' className="flex flex-row w-[60%] justify-between gap-20 mb-5">
      <div className="flex">
        <h1 className="text-center text-2xl font-bold mr-5 text-primary">Cart Items</h1>
        <Chip
          variant="outlined"
          value={`${length ?? 0} items`}
          className="text-primary border-primary"
        />
      </div>
    </Link>
  );
};

export default CartHeader;
