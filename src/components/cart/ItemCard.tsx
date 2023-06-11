"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { removeProduct, updateQuantity } from "@/actions/cartActions";

interface ItemProps {
  id: number;
  name?: string;
  quantity?: number;
  product_id: number;
  user_id: string;
  image_url?: string | null;
}

const ItemCard = (props: ItemProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const onRemoveItem = async() => {
    setLoading(true);
    await removeProduct(props.id);
    router.refresh();
    setLoading(false);
  }

  return (
    <div className="flex justify-between items-center mb-6 rounded-lg bg-white p-6 shadow-md lg:flex-col lg:gap-10 lg:w-[350px]">
      <div className="flex items-center w-[480px] lg:w-full gap-5 lg:flex-col lg:items-center">
        <Image
          width={200}
          height={200}
          src={
            props.image_url ??
            "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
          }
          alt="product-image"
          className="w-[150px] h-[200px] object-contain rounded-lg"
        />
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{props.name}</h2>
        </div>
      </div>

      <div className="flex items-center border-gray-100">
        <span
          onClick={async () => {
            if (props.quantity === 1) return;
            await updateQuantity({ id: props.id, quantity: -1 });
            router.refresh();
          }}
          className="cursor-pointer rounded-l text-white bg-secondary py-1 px-3.5 duration-100  "
        >
          {" "}
          -{" "}
        </span>
        <p className="h-8 w-8 border bg-white text-center text-xs outline-none flex justify-center items-center">
          {props.quantity}
        </p>
        <span
          onClick={async () => {
            await updateQuantity({ id: props.id, quantity: 1 });
            router.refresh();
          }}
          className="cursor-pointer rounded-r text-white bg-secondary py-1 px-3 duration-100 "
        >
          {" "}
          +{" "}
        </span>
      </div>

      <div className="flex items-center justify-center self-center lg:w-full">
        <Button loading={isLoading} onClick={onRemoveItem}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
