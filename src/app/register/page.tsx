import React from "react";
import AuthLayout from "@/components/layout/AuthLayout";
import RegisterForm from "@/components/auth/RegistrationForm";

export default function Register(): JSX.Element {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
