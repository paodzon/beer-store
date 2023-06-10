import { getShoppingCart } from "@/actions/getProducts";
import CartHeader from "@/components/cart/CartHeader";
import ItemCard from "@/components/cart/ItemCard";
import withAuth from "@/components/hoc/withAuth";

import React from "react";

export const revalidate = 0;

const Cart = async () => {
  const data: Array<CartItem> | [] | any = await getShoppingCart();
  const cartLength = data
  .map((item: CartItem) => item.quantity)
  .reduce((acc: number, curr: number) => acc + curr,0);

  if (!data) {
    return (
      <div className="w-full flex flex-row justify-center">
        <CartHeader length={0} />
      </div>
    );
  }


  return (
    <div className=" bg-gray-100 pt-20 h-screen">
      <div className="w-full flex flex-row justify-center">
        <CartHeader length={cartLength} />
      </div>
      <div className="flex flex-row w-full justify-center gap-20 lg:flex-col">
        <div className="rounded-lg w-[60%] lg:w-full lg:px-20 lg:flex lg:flex-row lg:flex-wrap lg:gap-10 lg:justify-center">
          {data.map((item: CartItem) => {
            return (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                product_id={item.product_id}
                user_id={item.user_id}
                image_url={item.image_url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Cart);
