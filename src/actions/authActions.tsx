"use client";
import * as actionTypes from "@/store/actionTypes";
import { toast } from "react-hot-toast";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Dispatch } from "redux";
const supabase = createClientComponentClient();

export const getCurrentUser: CallableFunction =
  (user: object) => async (dispatch: Dispatch) => {
    if (!user) return;
    dispatch({ type: actionTypes.LOGIN_USER, payload: user });
  };

export const signInUser: CallableFunction =
  ({ email, password }: Login) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.IS_LOADING, payload: true });
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (response.error) throw new Error(response.error.message);
      return true;
    } catch (err: any) {
      toast.error(err.message, {className:'font-bold'});
      dispatch({
        type: actionTypes.IS_LOGGING_IN_USER_ERROR,
        payload: err.message,
      });
      return false;
    } finally {
      dispatch({ type: actionTypes.IS_LOADING, payload: false });
    }
  };

export const signUpUser: CallableFunction =
  ({ email, password, confirmPassword }: SignUp) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.IS_LOADING, payload: true });
    console.log(email, password, confirmPassword);
    try {
      if (password !== confirmPassword)
        throw new Error("Passwords does not match");
      const response = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (response.error) throw new Error(response.error.message);
      toast.success("Account created!", {className:'font-bold'});
      return true;
    } catch (err: any) {
      dispatch({
        type: actionTypes.IS_SIGNING_UP_USER_ERROR,
        payload: err.message,
      });
      return false;
    } finally {
      dispatch({ type: actionTypes.IS_LOADING, payload: false });
    }
  };

export const signOutUser: CallableFunction =
  () => async (dispatch: Dispatch) => {
    await supabase.auth.signOut();
    dispatch({ type: actionTypes.LOGOUT_USER });
  };
