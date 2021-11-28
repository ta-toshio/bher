import { NextPage } from 'next'
import React from 'react'
import NoLoggedInLayout from '../../../components/layout/Login'
import LoginForm from '../components/LoginForm'
import { useRequireNotLogin } from '../../../contexts/auth/useRequireNotLogin'

const LoginPage: NextPage = () => {
  useRequireNotLogin("staff")

  return (
    <NoLoggedInLayout>
      <LoginForm />
    </NoLoggedInLayout>
  )
}

export default LoginPage
