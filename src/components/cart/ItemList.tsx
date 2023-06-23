"use client";
import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "@/actions/cartActions";


const ItemList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart.products);
  useEffect(() => {
    dispatch(getShoppingCart());
  }, [dispatch]);

  return (
    <div className="rounded-lg w-[60%] lg:w-full lg:px-20 lg:flex lg:flex-row lg:flex-wrap lg:gap-10 lg:justify-center sm:!px-10">
      {products?.map((item: CartItem) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity ?? 0}
            product_id={item.product_id}
            user_id={item.user_id}
            image_url={item.image_url}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
