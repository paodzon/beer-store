"use client";

import { getCurrentUser } from "@/actions/authActions";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';

interface AuthProps {
  session: Session | null,
  children: React.ReactNode
}

export default function AuthProvider({session,children}: AuthProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser(session?.user))
  },[dispatch, session?.user])

  return <>{children}</>
}