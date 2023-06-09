import React from 'react'

import AuthLayout from '@/components/layout/AuthLayout'
import RegisterForm from '@/components/auth/RegistrationForm'

const Register = () => {
  return (
    <AuthLayout>
    <RegisterForm/>
  </AuthLayout>
  )
}

export default Register