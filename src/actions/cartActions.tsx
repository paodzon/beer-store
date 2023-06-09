import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const addProduct = async (item: any) =>  {
  const {data} = await supabase.auth.getUser();
  const userId = await data.user?.id;
  try{
    if(!userId) return;
    const exists: any = await supabase
      .from("cart")
      .select()
      .eq("product_id", `${item.id}`);
    console.log(exists);
    if (exists.data.length !== 0) {
      const response = await supabase
        .from("cart")
        .update({ quantity: exists.data[0].quantity + 1 })
        .eq("product_id", item.id).select();
      return response;
    }else {
      const response = await supabase
      .from("cart")
      .insert({ name: item.name, quantity: 1, product_id: item.id, user_id: userId });
      return response;
    }  
  }catch(err){
    return err;
  }
};

export const updateQuantity = async ({id, quantity} : {id: number, quantity: number}) => {
  const { data, error } = await supabase.rpc("increment", { x: quantity, row_id: id });
  console.log(data);
  return data;
};

export const removeProduct = async(id:number) => {
  const {data, error} = await supabase.from('cart').delete().eq('id', id);
  console.log(data);
  return data;
}

