import LoginForm from '@/components/auth/LoginForm'
import AuthLayout from '@/components/layout/AuthLayout'


export default async function Login() {
  return <AuthLayout>
    <LoginForm />
  </AuthLayout>
}