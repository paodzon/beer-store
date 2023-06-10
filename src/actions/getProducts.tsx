import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies });

export const getProducts = async (query:string) => {
  const response = await fetch(`${process.env.PUNK_API}/beers?${query}`, {cache:'no-store'});
  return response.json();
}


export const getShoppingCart = async () => {
  const response = await supabase.from("cart").select().order('id', {ascending:true});
  return response.data;
};
