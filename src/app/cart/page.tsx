import React from "react";
import { getShoppingCart } from "@/actions/getProducts";
import CartHeader from "@/components/cart/CartHeader";
import ItemList from "@/components/cart/ItemList";


export const revalidate = 0;

const Cart: React.FC = async () => {
  const data: Array<CartItem> | [] | any = await getShoppingCart();

  if (!data) {
    return (
      <div className="w-full flex flex-row justify-center">
        <CartHeader/>
      </div>
    );
  }

  return (
    <div className=" bg-gray-100 pt-20 min-h-screen">
      <div className="w-full flex flex-row justify-center">
        <CartHeader />
      </div>
      <div className="flex flex-row w-full justify-center gap-20 lg:flex-col">
        <ItemList/>
      </div>
    </div>
  );
};

export default Cart;
