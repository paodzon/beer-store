import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import * as actionTypes from "@/store/actionTypes";
const supabase = createClientComponentClient();

export const getShoppingCart: CallableFunction =
  () => async (dispatch: Dispatch) => {
    try {
      const { data } = await supabase
      .from("cart")
      .select()
      .order("id", { ascending: true });
      const cartLength = data!
        .map((item: Array<CartItem> | any) => item.quantity)
        .reduce((acc: number, curr: number) => acc + curr, 0);
      dispatch({ type: actionTypes.GET_CART_LENGTH, payload: cartLength });
      dispatch({ type: actionTypes.GET_PRODUCTS, payload: data });
    } catch (err: any) {
      dispatch({ type: actionTypes.GET_PRODUCTS_ERROR, payload: err.message });
    }
  };

export const addProduct: CallableFunction =
  (item: { id: number; name: string; image: string }) =>
  async (dispatch: Dispatch) => {
    const { data } = await supabase.auth.getUser();
    const userId = await data.user?.id;
    try {
      if (!userId) return;
      const { data } = await supabase
        .from("cart")
        .select()
        .eq("product_id", `${item.id}`);
      if (data?.length !== 0) {
        dispatch(updateQuantity({ id: data![0].id, quantity: 1 }));
      } else {
        const { data } = await supabase
          .from("cart")
          .insert({
            name: item.name,
            quantity: 1,
            product_id: item.id,
            user_id: userId,
            image_url: item.image,
          })
          .select();
        dispatch({ type: actionTypes.ADD_PRODUCT, payload: data });
        return data;
      }
    } catch (err) {
      return err;
    }
  };

export const updateQuantity: CallableFunction =
  ({ id, quantity }: { id: number; quantity: number }) =>
  async (dispatch: Dispatch) => {
    try {
      const { data, error } = await supabase.rpc("increment", {
        x: quantity,
        row_id: id,
      });
      if (error) throw new Error(error.message);
      dispatch({
        type: actionTypes.UPDATE_QUANTITY,
        payload: { id, quantity },
      });
      return data;
    } catch (err: any) {
      return err;
    }
  };

export const removeProduct: CallableFunction =
  ({ id, quantity }: { id: number; quantity: number }) =>
  async (dispatch: Dispatch) => {
    try {
      const { data, error } = await supabase.from("cart").delete().eq("id", id);
      if (error) throw new Error(error.message);
      dispatch({ type: actionTypes.REMOVE_PRODUCT, payload: { id, quantity } });
      toast.success("Item removed!", { className: "font-bold" });
      return data;
    } catch (err: any) {
      toast.error(err.message, { className: "font-bold" });
      return err;
    }
  };
