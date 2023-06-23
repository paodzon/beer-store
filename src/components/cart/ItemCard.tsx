"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import { removeProduct, updateQuantity } from "@/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

interface ItemProps {
  id: number;
  name?: string;
  quantity: number;
  product_id: number;
  user_id: string;
  image_url?: string | null;
}

const ItemCard: React.FC<ItemProps> = (props) => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isRemovingProduct = useSelector((state:any) => state.cart.isRemovingProduct);

  const onRemoveItem = async () => {  
    setLoading(true);
    await dispatch(removeProduct({id: props.id, quantity: props.quantity}));
    setLoading(false);
  };

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
            if (props.quantity <= 1) return;
            await toast.promise(
              dispatch(updateQuantity({ id: props.id, quantity: -1 })),
               {
                 loading: 'Saving...',
                 success: <b>Quantity updated!</b>,
                 error: <b>Error! Please try again.</b>,
               }
             );
          }}
          className="cursor-pointer rounded-l text-primary border border-secondary py-0.5 px-3 duration-100 hover:bg-primary hover:text-white"
        >
          {" "}
          -{" "}
        </span>
        <p className="h-[30px] w-10 text-primary border border-t-secondary border-b-secondary text-center text-xs outline-none flex justify-center items-center">
          {props.quantity}
        </p>
        <span
          onClick={async() => {
            await toast.promise(
              dispatch(updateQuantity({ id: props.id, quantity: 1 })),
               {
                 loading: 'Saving...',
                 success: <b>Quantity updated!</b>,
                 error: <b>Error! Please try again.</b>,
               }
             );
          }}
          className="cursor-pointer rounded-r text-primary border border-secondary py-0.5 px-3 duration-100 hover:bg-primary hover:text-white"
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
