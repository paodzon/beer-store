import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {toast} from 'react-hot-toast';
const supabase = createClientComponentClient();

export const addProduct = async (item: {id: number, name:string, image:string}) =>  {
  const {data} = await supabase.auth.getUser();
  const userId = await data.user?.id;
  try{
    if(!userId) return;
    const exists: any = await supabase
      .from("cart")
      .select()
      .eq("product_id", `${item.id}`);
    if (exists.data.length !== 0) {
      const response = await supabase
        .from("cart")
        .update({ quantity: exists.data[0].quantity + 1 })
        .eq("product_id", item.id).select();
      return response;
    }else {
      const response = await supabase
      .from("cart")
      .insert({ name: item.name, quantity: 1, product_id: item.id, user_id: userId, image_url: item.image });
      return response;
    }  
  }catch(err){
    return err;
  }
};

export const updateQuantity = async ({id, quantity} : {id: number, quantity: number}) => {
  try {
    const { data, error } = await supabase.rpc("increment", {
      x: quantity,
      row_id: id,
    });
    if(error) throw new Error(error.message);
    toast.success('Item quantity updated.')
    return data;
  } catch (err:any) {
    toast.error(err.message)
    return err;
  }
};

export const removeProduct = async(id:number) => {
  try{
    const {data, error} = await supabase.from('cart').delete().eq('id', id);
    if(error) throw new Error(error.message);
    toast.success('Item removed!')
    return data;
  }catch(err:any){
    toast.error(err.message);
    return err;
  }
}
