import { getShoppingCart } from "@/actions/getProducts";
import CartCard from "@/components/cart/CartCard";
import withAuth from "@/components/hoc/withAuth";
import React from "react";


export const revalidate = 0

const Cart = async () => {
  const data:any = await getShoppingCart();
  
  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center">
      {data.map((item:CartItem) => {
        return (
          <CartCard
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            product_id={item.product_id}
            user_id={item.user_id}
            image_url=""
          />
        );
      })}
    </div>
  );
};

export default withAuth(Cart);
