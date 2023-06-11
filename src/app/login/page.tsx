import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/components/layout/AuthLayout";

export default function Login(): JSX.Element {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
