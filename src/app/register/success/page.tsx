import React from "react";
import SuccessCard from "@/components/auth/SuccessCard";
import AuthLayout from "@/components/layout/AuthLayout";

export default function RegisterSuccess(): JSX.Element {
  return (
    <AuthLayout>
      <SuccessCard />
    </AuthLayout>
  );
}
