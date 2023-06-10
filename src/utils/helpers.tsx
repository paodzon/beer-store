import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

const supabase = createServerComponentClient({ cookies });

export const getSession = async() => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export const checkAuthentication = async() => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }
  return true;
}